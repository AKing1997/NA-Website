import { useState, useEffect } from "react";
import { useAccount } from "../AccountContext";
import { ClaimSecure } from "./ClaimSecure";
import { CustomSelect } from "./CustomSelect";

const Exchange = () => {
  const { accounts, selectedAccount } = useAccount();
  const [enableButtons, setEnableButtons] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (accounts.length > 0) {
      setEnableButtons(true);
    } else {
      setEnableButtons(false);
    }
  }, [accounts]);

  return (
    <>
      <div className="heading-section">
        <h2>Get Your Secure Token</h2>
        <p className="head-text">
          Claim your <span className="secure-token-pink">Secure Token</span>
        </p>
      </div>

      <div className="secure-token-container">
        <div className="secure-token-left-col">
          <h3>Have you Setup Dev Mode?</h3>
          <p>
            In order to receive your{" "}
            <span className="secure-token-pink-sm">Secure Token</span> please set
            up Dev Mode first using the steps above.
          </p>
          <CustomSelect
            active={active}
            setActive={setActive}
            enableButtons={enableButtons}
          />
          <ClaimSecure
            selectedAccount={selectedAccount}
            enableButtons={enableButtons}
          />
        </div>
        <div className="secure-tokens-img-container">
          <div
            className="vertical-bar"
            style={{
              width: 0,
              height: "60%",
              opacity: 0.3,
              borderLeft: "1px solid white",
            }}
          />
          <div className="secure-tokens">
            <img src="src/assets/securetoken.png" alt="secure tokens" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
