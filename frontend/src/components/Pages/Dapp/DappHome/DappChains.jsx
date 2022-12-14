import { useEffect } from "react";
import { useChain, useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import PolygonLogo from "../../../../assets/polygon-logo.svg";

const DappChains = () => {
  const { Moralis, isWeb3Enabled, enableWeb3 } = useMoralis();

  const { chainId } = useChain();
  let navigate = useNavigate();
  const PolygonMainnetChainId = "0x89";
  const PolygonTestnetChainId = "0x13881";

  const switchToMainnet = async () => {
    try {
      if (chainId === PolygonMainnetChainId) {
        return alert("Already on Mainnet");
      } else {
        await Moralis.switchNetwork(PolygonMainnetChainId);
        navigate("/dapp/explore");
        navigate(0);
      }
    } catch (error) {
      return alert(error);
    }
  };

  const switchToTestnet = async () => {
    try {
      if (chainId === PolygonTestnetChainId) {
        return alert("Already on Testnet");
      } else {
        await Moralis.switchNetwork(PolygonTestnetChainId);
        navigate("/dapp/explore");
        navigate(0);
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    (async () => {
      if (!isWeb3Enabled) {
        await enableWeb3();
      }
    })();
  }, []);

  return (
    <div
      className={`flex gap-1 items-start text-left pb-10 ${
        chainId === PolygonMainnetChainId ? "flex-col" : "flex-col-reverse"
      }`}
    >
      <button
        onClick={switchToMainnet}
        className={`${
          chainId === PolygonMainnetChainId
            ? "text-sucsBlue font-semibold py-1 text-left flex gap-2"
            : "text-sm"
        }`}
      >
        {chainId === PolygonMainnetChainId ? (
          <div>
            <img src={PolygonLogo} alt="" />
          </div>
        ) : (
          "Switch To "
        )}
        Mainnet
      </button>
      <button
        onClick={switchToTestnet}
        className={`${
          chainId === PolygonTestnetChainId
            ? "text-sucsBlue font-semibold py-1 text-left flex gap-2"
            : "text-sm"
        }`}
      >
        {chainId === PolygonTestnetChainId ? (
          <div>
            <img src={PolygonLogo} alt="" />
          </div>
        ) : (
          "Switch To "
        )}
        Mumbai
      </button>
    </div>
  );
};

export default DappChains;
