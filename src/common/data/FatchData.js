import axios from 'axios';

const BASE_URL = 'https://crm-backend-karishan-mehmoods-projects.vercel.app';

// const BASE_URL ="http://localhost:3002";

// Your API base URL

const api_authth = axios.create({
   baseURL: BASE_URL,  
   header: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    // You can add common headers here
  },
});



const api = axios.create({
  
  baseURL: BASE_URL,  
  headers: {
    "Authorization" : localStorage.getItem('token'),
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   
   // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
   // You can add common headers here
 },
});


const API = {

  // authentication Api's

  // -- Registration  // Not working yet
  postUserRegister: async ( userRegisterData) => {
    console.log("---")
    console.log(userRegisterData);
    
    return await api_authth.post(`/auth/register`, userRegisterData);
  },  

  // -- Login // working in postman
  // new changes
  postUserLogin: async (userLoginData) => {
    console.log(`Register data ==> ${userLoginData}`)
        return await api_authth.post(`/auth/login`, userLoginData);
  },  











//---------------------------------------------------------------------------//
  // Contacts  From   Hubspot

  // Getting all Contacts form Hubspot
  getAllContactsFromHubspot: (userId) => {
    return api.get(`/contacts/getAllContactsFromHubspot`);
  },

  // Getting all Contacts
  getContact: (userId) => {
    return api.get(`/getContact/${userId}`);
  },

  // creating New Contact

  postNewContact: ( userData) => {
    return api.post(`/contacts/createContact`, userData);
  },

  // update Contact
  putupdateContact: (userId, userData) => {
    return api.put(`/updateContact/:contactId`, userData);
  },

  // get id form email
  getIdFromEmail: (userId, userData) => {
    return api.get(`/IdFromEmail`, userData);
  },














  // ------------------------------------------------//
  // All Deals Apis 


  // viewing all deals
  getAllDealsFormHubsport : (userId) =>{
    return api.get('/deals/getAllDealsFromHubspot');
  },


  // view a single deal
  getDeal: (userId) => {
    return api.get(`/getDeal/${userId}`);
  },


  // create deal
  postCreateDeal : ( userData) =>{
    console.log(`CREATE Deal ${userData}`);
    return api.post('/deals/createDeal', userData);
  },



  postAssociateDealWithContact: (userId, userData) =>{
    return api.get('/AssociateDealWithContact', userData);
  },
  

  putUpdateDeal: (userId, userData) => {
    return api.put(`/updateDeal/${userId}`, userData);
  },

  getannualdeals: () => {
    return api.get('/deals/dealsThisYear');
  },

  getLeadConversations: () => {
    return api.get('/deals/getClosedWonDeals');
  },



  // ------------------------------------------------//
  // profile Api's

  // change password of profile
  putChangePassword : (userId, userData) => {
    return api.put(`/changePassword`,userData );
  },

  // changing user name
  putUpdateUserName  : (userId, userData) => {
    return api.put(`/updateUserName`,userData );
  },

  //update profile picture 
  putUpdateProfilePicture  : (userId, userData) => {
    return api.put(`/updateProfilePicture`,userData );
  },

  // Getting Profile Picture
  getUserPicture: (userId) => {
    return api.get(`/getProfilePicture`);
  },

  // Saving referal Code
  postSaveReferralCode  : (userId, userData) => {
    return api.post(`/saveReferralCode`,userData );
  },

  // Geting All Genealogy 
  getGenealogy: (userId) => {
    return api.get(`/profile/genealogy`);
  },

  getMostReferral: () =>{
    return api.get('/profile/mostReferral');
  },

  getParent: () =>{
    return api.get('/profile/getParent');
  },

  getChildren: () =>{
    return api.get('/profile/getChildren');
  },
  
  getReferalCode: () =>{
    return api.get('/profile/getReferalCode');
  },







  // ------------------------------------------------//
  // All Sales Api's

  // sale With Most Pannels (LargestSold)
  getSaleWithMostPannels: (userId) => {
    return api.get(`/sales/saleWithMostPannels`);
  },

    // sale With Most Wattage
    getSaleWithMostWattage: (userId) => {
      return api.get(`/sales/saleWithMostWattage`);
    },

      // Get Sales
  getSales: (userId) => {
    return api.get(`/sales/getSales`);
  },

    // annual Sales
    getAnnualSale: (userId) => {
      return api.get(`/sales/annualSale`);
    },

      // largest Sale
  getLargestSale: (userId) => {
    return api.get(`/sales/largestSale`);
  },

    // daily Average Sale
    getDailyAverageSale: (userId) => {
      return api.get(`/sales/dailyAverageSale`);
    },


    // Create Sales
    postCreateSale: (userData) => {
      return api.post(`/sales/createSale`, userData);
    },

  // daily singel  sale
  getSingleSale: (userId) => {
    return api.get(`/${userId}`);
  },

  // update a sale record
  putUpdateSale: (userId, userData) => {
    return api.put(`/${userId}`, userData);
  },

  // dalete a sale
  daleteSale: (userId, userData) => {
    return api.delete(`/${userId}`);
  },








  // All News Apis 

    // get al news
    getAllNews: () => {
      return api.get(`/news/getAllNews`);
    },
    


    postCreateNews : ( userData) =>{
      console.log(`CREATE News ${userData}`);
      return api.post('/news/createNews', userData);
    },


    // All installers Api

    // Getting all Installers
  getAllInstaller: () => {
    return api.get(`/installer/getAll`);
  },

  // Get one Installer information
  getOneInstaller: (id) => {
    return api.get(`installer/getInstaller/${id}`);
  },

  getListInstaller: (id) => {
    return api.post(`installer/getListInstaller`, id);
  },

  // creating New Installer

  postNewInstaller: ( userData) => {
    return api.post(`/installer/createInstaller`, userData);
  },



// add Note Api Routes
postNote: ( userData) => {
  return api.post(`/saleNotes/createSaleNote`, userData);
},

postDealNote: ( userData) => {
  return api.post(`/dealNotes/createDealNote`, userData);
},



getNote: (id) => {
  return api.get(`saleNotes/getSaleNoteBySaleId/${id}`);
},

getDealNote: (id) => {
  return api.get(`dealNotes/getDealNoteByDealId/${id}`);
},








  getUser: (userId) => {
    return api.get(`/request`);
  },

  postUser: (userId, userData) => {
    return api.post(`/post`, userData);
  },

  putUser: (userId, userData) => {
    return api.put(`/users/${userId}`, userData);
  },

  // Add more API calls as needed
};

export default API;
