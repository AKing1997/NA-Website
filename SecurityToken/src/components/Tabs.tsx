import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@radix-ui/react-tabs';
import '../App.css';

const TabsSection = () => {
  return (
    <Tabs defaultValue="tab1" className="TabsRoot" aria-label="Example Tabs">
      <TabsList className="TabsList">
        <TabsTrigger value="tab1" className="TabsTrigger">
            Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="TabsTrigger">
            Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="TabsTrigger">
            Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="TabsContent">
        <p className="Text">Make changes to your account here. Click save when you're done.</p>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
            Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
            Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Save changes</button>
        </div>
      </TabsContent>
      <TabsContent value="tab2" className="TabsContent">
      <p className="Text">Make changes to your account here. Click save when you're done.</p>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
            Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
            Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Save changes</button>
        </div>
      </TabsContent>
      <TabsContent value="tab3" className="TabsContent">
      <p className="Text">Make changes to your account here. Click save when you're done.</p>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
            Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
            Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Save changes</button>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;