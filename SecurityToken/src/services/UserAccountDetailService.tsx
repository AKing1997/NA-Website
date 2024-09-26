import { GatewayApiClient, StateEntityDetailsVaultResponseItem } from '@radixdlt/babylon-gateway-api-sdk'
import { useAccount } from '../AccountContext';
import { useEffect, useState } from 'react';

export const UserAccountDetailService = () => {
    const { accounts, selectedAccount } = useAccount();
  const [enableButtons, setEnableButtons] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (accounts.length > 0) {
      setEnableButtons(true);
    } else {
      setEnableButtons(true);
    }
  }, [accounts]);
    const x = fetchAccountBadges();
    async function fetchAccountBadges() {
        try {
        const accountAddress = selectedAccount;
        
        const useGatewayApi = GatewayApiClient.initialize({
            basePath: 'https://stokenet-gateway.radix.live',
            applicationName: 'Astrolescent',
        })
        
        const entityDetails = await useGatewayApi.state.innerClient.stateEntityDetails({
            stateEntityDetailsRequest: {
                aggregation_level: "Vault",
                addresses: [accountAddress],
                opt_ins: {
                    non_fungible_include_nfids: true
                }
            }
        })
           
        console.log(entityDetails);
        return entityDetails;
        } catch (error) {
        console.error('Error fetching account badges:', error);
        }
    }
    return (
        <button
          id="get-secure-token"
          onClick={fetchAccountBadges}
          disabled={!selectedAccount || !enableButtons}
          className={loading ? "loading" : ""}>
          Claim Secure Token
        </button>
      );
  }