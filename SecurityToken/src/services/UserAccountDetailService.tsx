import { GatewayApiClient } from '@radixdlt/babylon-gateway-api-sdk';
import { useEffect, useState } from 'react';
import { useAccount } from '../AccountContext';

interface AccountDetails {
  items: Array<{
    address: string;
    fungible_resources?: {
      items: Array<{
        resource_address: string;
      }>;
    };
    non_fungible_resources?: {
      items: Array<{
        resource_address: string;
      }>;
    };
  }>;
  fungibleData?: Array<any>;
  nonFungibleData?: Array<any>;
}

export const UserAccountDetailService = () => {
  const { accounts } = useAccount();
  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const accountAddress = accounts[0]?.address;

  useEffect(() => {
    if (accountAddress) {
      fetchAddressDetails(accountAddress);
    }
  }, [accountAddress]);

  const fetchAddressDetails = async (address: string) => {
    setLoading(true);
    try {
      const useGatewayApi = GatewayApiClient.initialize({
        basePath: 'https://stokenet-gateway.radix.live',
        applicationName: 'Astrolescent',
      });

      const entityDetails = await useGatewayApi.state.innerClient.stateEntityDetails({
        stateEntityDetailsRequest: {
          aggregation_level: 'Vault',
          addresses: [address],
          opt_ins: {
            non_fungible_include_nfids: true,
          },
        },
      });

      console.log(entityDetails);
      setAccountDetails(entityDetails);

      let fungibleData: Array<any> = [];
      if (entityDetails.items && entityDetails.items.length > 0) {
        const fungibleResources = entityDetails.items[0].fungible_resources;
        if (fungibleResources && fungibleResources.items.length > 0) {
          fungibleData = await Promise.all(
            fungibleResources.items.map(async (fungible) => {
              const resourceDetails = await fetchAddressDetails(fungible.resource_address);
              return resourceDetails;
            })
          );
          console.log('Fungible Data:', fungibleData);
        }
      }

      let nonFungibleData: Array<any> = [];
      if (entityDetails.items && entityDetails.items.length > 0) {
        const nonFungibleResources = entityDetails.items[0].non_fungible_resources;
        if (nonFungibleResources && nonFungibleResources.items.length > 0) {
          nonFungibleData = await Promise.all(
            nonFungibleResources.items.map(async (nonFungible) => {
              const resourceDetails = await fetchAddressDetails(nonFungible.resource_address);
              return resourceDetails;
            })
          );
          console.log('Non-Fungible Data:', nonFungibleData);
        }
      }
      
      setAccountDetails((prevDetails) => ({
        ...prevDetails,
        items: prevDetails?.items || entityDetails.items,
        fungibleData,
        nonFungibleData,
      }));

    } catch (error: any) {
      console.error('Error fetching account details:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;
  if (error) return { error };

  return accountDetails;
};
