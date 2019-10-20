import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x715E64555a5E73164f6faA83c52B62D3a3312D2a'
);

export default instance;
