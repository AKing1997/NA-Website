import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@radix-ui/react-tabs';
import '../App.css';
import Exchange from './Exchange';
import { TokenaizeNonFungibleAsset } from './TokenaizeNonFungibleAsset';
import { TokenaizeAssset } from './TokenaizeAssset';
import { Badge } from './Badge';
import { SecureToken } from './SecureToken';

const TabsSection = () => {
  return (
    <Tabs defaultValue="secureToken" className="TabsRoot" aria-label="Example Tabs">
      <TabsList className="TabsList">
        <TabsTrigger value="secureToken" className="TabsTrigger">
            Secure Token
        </TabsTrigger>
        <TabsTrigger value="badge" className="TabsTrigger">
            Badge's
        </TabsTrigger>
        <TabsTrigger value="createAsset" className="TabsTrigger">
            Tokenaize fungible asset
        </TabsTrigger>
        <TabsTrigger value="createNonFungibleAsset" className="TabsTrigger">
            Tokenaize asset
        </TabsTrigger>
        <TabsTrigger value="exchangeToken" className="TabsTrigger">
            Exchange Token
        </TabsTrigger>
      </TabsList>
      <TabsContent value="secureToken" className="TabsContent">
        <SecureToken />
      </TabsContent>
      <TabsContent value="badge" className="TabsContent">
        <Badge />
      </TabsContent>
      <TabsContent value="createAsset" className="TabsContent">
        <TokenaizeAssset />
      </TabsContent>
      <TabsContent value="createNonFungibleAsset" className="TabsContent">
        <TokenaizeNonFungibleAsset />
      </TabsContent>
      <TabsContent value="exchangeToken" className="TabsContent">
        <Exchange />
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;