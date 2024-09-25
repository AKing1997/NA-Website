import * as Tabs from '@radix-ui/react-tabs';
import '../App.css';

const TabMenu = () => {
    return (
        <div className="storybook-wrapper">
          <Tabs.Root defaultValue="sharing">
            {/* Tabs List */}
            <Tabs.List>
              <Tabs.Trigger value="sharing">Sharing</Tabs.Trigger>
              <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
            </Tabs.List>
    
            {/* Tabs Content */}
            <Tabs.Content value="sharing">
              <p>This is the Sharing tab content.</p>
            </Tabs.Content>
           <Tabs.Content value="profile">
              <p>This is the Profile tab content.</p>
            </Tabs.Content>
          </Tabs.Root>
      </div>
    );
  };
  
  export default TabMenu;