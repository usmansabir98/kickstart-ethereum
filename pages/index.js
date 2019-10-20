import React from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

import { Card, Button } from "semantic-ui-react";

class CampaignIndex extends React.Component {
    constructor(props){
        super(props);
    }

    // async componentDidMount(){
    //     // this function not executed on nextjs server
    //     const campaigns = await factory.methods.getDeployedCampaigns().call();
    //     console.log(campaigns);
    // }

    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map((address)=>{
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />
    }

    render(){
        return (
        <Layout>
            <div>
                <h3>Open Campaigns</h3>
                <Button
                    floated="right" 
                    content="Create Campaign" icon="add circle" primary
                />
                {this.renderCampaigns()}
                
            </div>
        </Layout>
        );
    }
}

export default CampaignIndex;