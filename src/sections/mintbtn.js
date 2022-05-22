import { white } from "./whiteaddresses.js";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const leaf = white.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaf, keccak256, { sortPairs: true });

const REACT_APP_CONTRACT_ADDRESS = "0x33fB93801253D42353dd5A1DbD47771c95d70A34";
const SELECTEDNETWORK = "137";
const SELECTEDNETWORKNAME = "Polygon";
const nftquantity = 7777;

function checkWhitelist(a) {
  const check = keccak256(a);
  const proof = merkleTree.getHexProof(check);
  const root = merkleTree.getRoot();

  return merkleTree.verify(proof, check, root);
}

function getProof(a) {
  const check = keccak256(a);
  return merkleTree.getHexProof(check);
}

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [walletConnected, setWalletConnected] = useState(0);

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("SOLD OUT!");
        }
      } else {
        setErrorMsg('Select "' + SELECTEDNETWORKNAME + '" network to Mint!');
      }
    } else {
      setErrorMsg("Polygon Wallet not found!!");
    }
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (!ethereum) setErrorMsg("Please install MetaMask!");
    }
  }, []);

  async function loadWeb3() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let current = await ct.methods.totalSupply().call();
        if (Number(current) === nftquantity) {
          setErrorMsg("Sold out");
          return;
        }

        let maxmints = await ct.methods.MAX_PER_Address().call();
        let bal = await ct.methods.numberMinted(metaMaskAccount).call();

        if (bal >= maxmints) {
          setErrorMsg("Already Minted 20 Pixies");
          return;
        }

        let price = await ct.methods.PRICE().call();
        let proof = getProof(metaMaskAccount);

        let statusone = await ct.methods.status().call();

        if (statusone == 1) {
          await ct.methods
            .whitelistMint(quantity, proof)
            .send({ from: metaMaskAccount, value: price * quantity });
        } else if (statusone == 2) {
          await ct.methods
            .mint(quantity)
            .send({ from: metaMaskAccount, value: price * quantity });
        }
        setQuantity(1);
      } else {
        setErrorMsg('Select "' + SELECTEDNETWORKNAME + '" network!');
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }

  async function connectWallet() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];

        let statusone = await ct.methods.getStatus().call();

        if (statusone == 0) {
          // setWalletConnected(1);
          setErrorMsg("Minting not started!");
          return;
        } else if (statusone == 1) {
          checkWhitelist(metaMaskAccount)
            ? setWalletConnected(1)
            : setErrorMsg("Not whitelisted!");
          return;
        } else if (statusone == 2) setWalletConnected(1);
      }
    }
  }

  return (
    <div className="BtnDiv">
      {!errormsg ? (
        <div className="row align-items-center">
          {walletConnected == 0 ? (
            <div className="col-12">
              <button
                onClick={() => {
                  connectWallet();
                }}
                className="Mint btn py-2"
              >
                <span>Connect Wallet</span>
              </button>
            </div>
          ) : (
            ""
          )}
          {walletConnected == 1 ? (
            <>
              <div className="col-sm-6">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn Mint p-2 m-0"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    <span className="button_text">-</span>
                  </button>
                  <span
                    className="quantity"
                    // style={{ padding: "20px" }}
                  >
                    {quantity}
                  </span>
                  <button
                    className="btn Mint p-2 m-0"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity == 20}
                  >
                    <span className="button_text">+</span>
                  </button>
                </div>
              </div>
              <div className="col-sm-6 pt-3 pt-sm-0">
                <button
                  type="button"
                  className="btn Mint py-2 mt-0 w-100"
                  onClick={() => loadWeb3()}
                  style={{ marginBottom: "0px" }}
                >
                  <span>Mint</span>
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <p className="mt-3 text-white mx-auto mb-0 text-center">{nftquantity-totalSupply}/{nftquantity} Available</p> */}
        </div>
      ) : (
        <h5 className="mt-2 text-white supplytext">
          <b>{errormsg}</b>
        </h5>
      )}
    </div>
  );
}

export default Mintbtn;
