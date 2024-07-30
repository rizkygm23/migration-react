import React from "react";
import Card from './component/Card';


const Uiuxaps = () => {
    const cardData = [
        {
            type: "uiux",
            title: "InvestaSync",
            description: "InvestaSync is an application used to monitor all investment portfolios from various sectors by connecting APIs from the brokers or exchanges you use. With InvestaSync, you can manage and track the performance of your investments in real-time on a single, user-friendly platform.",
            imageUrl: iu01,
            buttonImageUrl: "../assets/images/ui01.png",
            moreUrl:'https://www.behance.net/gallery/189571381/Investa-Aggregator-for-Investing-in-Stocks-Crypto'
          },
          {
            type: "uiux",
            title: "Zkrow",
            description: "Zkrow is a borrowing and lending project in the crypto world. With Zkrow, users can borrow crypto assets with collateral or offer their assets to be lent out and earn interest. The platform utilizes the latest technology to ensure security and efficiency in every transaction, making it a reliable and transparent solution for users looking to optimize their crypto assets.",
            imageUrl: "../assets/",
            buttonImageUrl: "./img/next.png",
            moreUrl:"https://www.behance.net/gallery/189569487/Web3-Landing-page-ZkRow"
          },
          {
            type: "uiux",
            title: "Drop Wallet",
            description: "Drop Wallet is a crypto wallet with a unique feature that allows users to monitor and provide statistics on their wallet, especially those based on EVM (Ethereum Virtual Machine). In addition to basic wallet functions, Drop Wallet offers in-depth analysis and statistical reports on your crypto asset activities and values.",
            imageUrl: "./img/ui03.png",
            buttonImageUrl: "./img/next.png",
            moreUrl:"https://www.behance.net/gallery/175953233/Retdrop-Wallet"
          },
          {
            type: "uiux",
            title: "Hinkal Protocol",
            description: "Hinkal is a project that uses Account Abstraction (AA) to enhance security and ease of use in blockchain transactions. By leveraging AA technology, Hinkal allows users to have more flexible control over their accounts, including private key management and transaction permissions.",
            imageUrl: "./img/ui04.png",
            buttonImageUrl: "./img/next.png",
            moreUrl:"https://hinkal.pro/"
          },
          {
            type: "uiux",
            title: "NFT Marketplace",
            description: "NFT Marketplace is a digital platform that enables users to buy, sell, and trade Non-Fungible Tokens (NFTs). The marketplace offers various features such as auctions, direct offers, and integration with multiple blockchains.",
            imageUrl: "./img/ui05.png",
            buttonImageUrl: "./img/next.png",
            moreUrl:"https://dribbble.com/shots/20891660-Hyped-Market-a-NFT-MARKETPLACE"
          },
        {
          type: "node",
          title: "Avail",
          description: "Avail is a Web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.",
          imageUrl: "./img/Avail.png",
          buttonImageUrl: "./img/next.png",
          moreUrl:"https://www.availproject.org/"
        },
        {
          type: "node",
          title: "Aleo",
          description: "True ZK should provide all three. Aleo is the first place that brings all the power of ZK under one roof.",
          imageUrl: "./img/aleo.png",
          buttonImageUrl: "./img/next.png",
          moreUrl:"https://aleo.org/"
        },
        {
          type: "node",
          title: "Bevm",
          description: "BEVM is the first fully decentralized EVM-compatible Bitcoin L2 that uses BTC as Gas. It allows all DApps which can run in the Ethereum ecosystem to operate on Bitcoin L2",
          imageUrl: "./img/bevm.png",
          buttonImageUrl: "./img/next.png",
          moreUrl:"https://www.bevm.io/"
        },
        {
          type: "node",
          title: "Rivalz",
          description: "Use Rivalz for decentralized data processing and storageAccess networks of Trusted Data and Intel providers.",
          imageUrl: "./img/rivalz.png",
          buttonImageUrl: "./img/next.png",
          moreUrl:"https://rivalz.ai/"
        },
        {
          type: "node",
          title: "Sonaric",
          description: "The first AI-powered network that optimizes the allocation and management of all compute across all chains to perfectly reward all contributors.",
          imageUrl: "./img/sonaric.png",
          buttonImageUrl: "./img/next.png",
          moreUrl:"https://sonaric.xyz/"
        }
      ];
  const uiuxData = cardData.filter(card => card.type === 'uiux');


  return (
    <section id="uiux" className="justify-between container px-10 grid grid-cols-1 pt-36 max-w-screen-xl mx-auto mt-20">
        <div>
          <h1 className="text-2xl font-sans font-bold">
            UI/<span className="text-sky-500">UX</span> Designer.
          </h1>
          <h2 className="text-xl mt-1 font-sans font-medium text-slate-600">
            All Works
          </h2>
        </div>
        <div className="bg-sky-500 h-2 mt-2 rounded-full"></div>
        <div id="card-UIUX" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {uiuxData.map(card => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              buttonImageUrl={card.buttonImageUrl}
              moreUrl={card.moreUrl}
            />
          ))}
        </div>
      </section>

  );
};



export default Uiuxaps;
