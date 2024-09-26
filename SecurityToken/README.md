# Security Token Web Application

## Overview

This website provides a user interface for managing **Security Tokens** on the **Radix network**, based on the **ERC-3643** protocol with identity verification powered by **OnChainID**. The web app allows users to interact with the underlying smart contract for issuing, managing, and exchanging security tokens that comply with regulatory standards.

### Key Features

- **User Identity Management**: Register and manage on-chain identities, similar to **OnChainID** roles such as admin, manager, agent, and client.
- **Asset Tokenization**: Mint and manage both fungible and non-fungible tokens (NFTs) that represent real-world assets.
- **Token Exchange**: Clients can exchange XRD for security tokens via a user-friendly interface.
- **Permissioned Transfers**: Secure and compliant token transfers based on user roles and verified identities.

## Technology Stack

- **Frontend**: 
  - HTML5, CSS3, TypeScrypt
  - React.js
  
- **Backend**: 
  - Radix Engine (Smart contracts deployed on Radix)

- **Smart Contract Layer**: 
  - **Radix (Scrypto)**: The core functionality of identity and asset management lives on the Radix blockchain, built using Scrypto.
  
- **Wallet Integration**:
  - **Radix Wallet**: Users can interact with the application through the Radix wallet to sign transactions and verify their identities.

## Website Structure

### Pages

1. **Home**: 
   - Overview of the project, mission, and token functionality.
   
2. **Identity Registration**:
   - A form for users to create and register their identities (Admin, Manager, Agent, or Client) on the Radix network.
   
3. **Token Management**:
   - Admins and managers can mint fungible and non-fungible tokens representing real-world assets.
   
4. **Token Exchange**:
   - Clients can exchange XRD tokens for security tokens, with prices defined by the admin.
   
5. **Dashboard**:
   - A comprehensive overview for users to track their balances, assets, and permissions.

### Example Pages

- **Identity Management**: 
  - Users can register their identities by filling in a form (name, last name, role) and then signing the transaction via their Radix wallet.
  
- **Real-World Asset Tokenization**:
  - A form to create fungible and non-fungible tokens. Users can specify asset details like name, description, initial supply, and asset type.
  
- **Token Exchange**:
  - A page where clients can input the amount of XRD they want to exchange for security tokens. The app will calculate the number of tokens based on the current price set by the admin.
