import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import chatbotSteps from "./steps.json";
const config = {
  width: "700px",
  height: "400px",
 floating: true,
  background: "#f5f8fb",
};
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#97b84c",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#97b84c",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const product =["product","produit","prod","acheter","buy"];
const price =["price" , "prix" ,"pri","pric","pricing"] ;
const contact =["contactez","contact","email","adresse","adress" ];
const devis =["devis", "Devis","DEVIS" ,"devi" , "Devi" , "DEVI" , "remise" , "remis" , "Remise","REMISE" ,"REMIS"]
const consultation=["consultation","Consultation","consul","consulter","consultat","rendez-vous","Rendez-vous","rendezvous","rdv","RDV","RENDEZVOUS","CONSULTATION"]
const category=["category","catégorie","categorie","catégori","categori","Catégorie","CATEGORIE","CATEGORY"]
const livraison=["livraison","livrason","Livriason","LIVRAISON","delivery","Delivery","DELIVERY","durée","time", "jours","livrasion","temps"]
const domaine =["domaine","specialisée","spécial","domain","Domaine","DOMAINE","vend","secteur","activité","MAFI","mafi","qui est","quelle est"]
const bonjour=["bonjour" , "Bonjour", "BONJOUR" , "slu" , "salut","hi" , "hello","good morning","bnj","bnjr","bonjou" ]

// const steps = [
//   {
//       id: 1,
//       message: "BONJOUR, SI VOUS AVEZ BESOIN VOUS POUVEZ NOUS ECRIRE",
//       trigger: 2
//   },
//   {
//       id: 2,
//       user: true,
//       trigger: (
//           {value, steps}
//       ) => {
//           const values = value.split(" ");
//           console.log(values);

//           values.map(obj => {


//               if (product.includes(obj)) {
//                   return 3
//               } else if (price.includes(obj)) {
//                   return 4
//               } else if (contact.includes(obj)) {
//                   return 5
//               }
//               else if (values.indexOf(obj)===values.length-1)
//               {
//                 console.log(values.indexOf(obj)===values.length-1);
//                 return 5
//               }
//           });

//       }
//   },
//   {
//       id: 3,
//       message: "nos produit dispo",
//       trigger: 2
//   },
//   {
//       id: 4,
//       message: "nos price",
//       trigger: 2
//   }, {
//       id: 5,
//       message: "notre contact",
//       trigger: 2
//   }, {
//       id: 6,
//       message: "AU REVOIR"
//   },


// ]
const steps = [
  {
    id: 1,
    message: "BONJOUR ",
    options: [
      { value: 1, label: 'au revoir chatboot', trigger: '6' },
    ],
    trigger: 2
  },
  {
    id: 2,
    message: "SI VOUS AVEZ BESOIN VOUS POUVEZ NOUS ECRIRE",
    user: true,
    options: [
      { value: 1, label: 'au revoir chatboot', trigger: 6 },
    ],
    trigger: ({ value, steps }) => {
      console.log(steps);

        
        if(value.indexOf(product[0])!==-1 || value.indexOf(product[1])!==-1 || value.indexOf(product[2])!==-1){
          return 3
        }
        else if(value.indexOf(price[0])!==-1 || value.indexOf(price[1])!==-1 || value.indexOf(price[2])!==-1 ){
          return 4
        }
        else if(value.indexOf(contact[0])!==-1 || value.indexOf(contact[1])!==-1 || value.indexOf(contact[2])!==-1 || value.indexOf(contact[3])!==-1|| value.indexOf(contact[4])!==-1){
          return 5
        }
        else if(value.indexOf(devis[0])!==-1 ||value.indexOf(devis[1])!==-1|| value.indexOf(devis[2])!==-1 || value.indexOf(devis[3])!==-1 || value.indexOf(devis[4])!==-1 || value.indexOf(devis[5])!==-1 || value.indexOf(devis[6])!==-1 || value.indexOf(devis[7])!==-1 || value.indexOf(devis[8])!==-1 || value.indexOf(devis[9])!==-1 || value.indexOf(devis[10])!==-1) {
          return 7
        }
        else if (value.indexOf(consultation[0])!==-1 || value.indexOf(consultation[1])!==-1 || value.indexOf(consultation[2])!==-1 || value.indexOf(consultation[3])!==-1 || value.indexOf(consultation[4])!==-1 || value.indexOf(consultation[5])!==-1 || value.indexOf(consultation[6])!==-1 || value.indexOf(consultation[7])!==-1 || value.indexOf(consultation[8])!==-1 || value.indexOf(consultation[9])!==-1          )
        {
            return 8
        }
        else if(value.indexOf(category[0])!==-1 || value.indexOf(category[1])!==-1 || value.indexOf(category[2])!==-1 || value.indexOf(category[3])!==-1 || value.indexOf(category[4])!==-1 || value.indexOf(category[5])!==-1 || value.indexOf(category[6])!==-1 )
        {
          return 9
        }
        else if (value.indexOf(livraison[0])!==-1  || value.indexOf(livraison[1])!==-1  || value.indexOf(livraison[2])!==-1 || value.indexOf(livraison[3])!==-1  || value.indexOf(livraison[4])!==-1  || value.indexOf(livraison[5])!==-1  || value.indexOf(livraison[6])!==-1 || value.indexOf(livraison[7])!==-1  || value.indexOf(livraison[8])!==-1  || value.indexOf(livraison[9])!==-1   )
        {
          return 10
        }
        else if(value.indexOf(bonjour[0])!==-1 ||  value.indexOf(bonjour[1])!==-1 || value.indexOf(bonjour[2])!==-1  || value.indexOf(bonjour[3])!==-1 || value.indexOf(bonjour[4])!==-1  || value.indexOf(bonjour[5])!==-1 || value.indexOf(bonjour[6])!==-1  || value.indexOf(bonjour[7])!==-1 || value.indexOf(bonjour[8])!==-1   || value.indexOf(bonjour[9])!==-1  || value.indexOf(bonjour[10])!==-1          )
        {
          return 11
        }
        else if (value.indexOf(domaine[0])!==-1 ||  value.indexOf(domaine[1])!==-1  || value.indexOf(domaine[2])!==-1 || value.indexOf(domaine[3])!==-1  || value.indexOf(domaine[4])!==-1 || value.indexOf(domaine[5])!==-1  || value.indexOf(domaine[6])!==-1   || value.indexOf(domaine[7])!==-1 || value.indexOf(domaine[8])!==-1 || value.indexOf(domaine[9])!==-1 || value.indexOf(domaine[10])!==-1 || value.indexOf(domaine[11])!==-1   )
        {
          return 12
        }
        else return 2
    }
  },
  {
    id: 3,
    message: `nos produits disponibles sont exoposés dans le composant product dans la barre des taches`,
    trigger: 2
  },
  {
    id: 4,
    message: "si vous voulez savoir les prix des produits disponibles, il suffit d'aller visiter le composant product dans la barre des taches, cliquer sur le produit en question et vous allez trouver tous les informations dont vouz avez besoin.",
    trigger: 2
  },
  {
    id: 5,
    message: "si vous voulez nous contacter, il suffit de scroller jusqu'à la bas pour trouver nos contacts , si vous avez une reclamation, vous pouvez visiter la fenetre Contact Us et envoyer votre réclamation, nous espèrons être à la hauteur de vos attentes.",
    trigger: 2
  },
  {
    id : 7,
    message:"si vous voulez demander un devis, vous devez tout d'abord vous connecter puis cliquer sur demander un devis, choisir les produits dont vous avez besoin ainsi que leurs quantités et envoyer la demande. Nous allons vous répondre par un e-mail.",
    trigger : 2
  },
  {
    id : 8 ,
    message : "si vous voulez demander une consultation technique, vous devez tout d'abord vous connecter puis cliquer sur demander une consultation, choisir la date, le lieu et le sujet puis envoyer la demande. Nous allons vous répondre par un e-mail." ,
    trigger : 2
  },
  {
    id : 9 ,
    message :"catégorie",
    trigger:6
  },
  {
    id:10,
    message :"livraison",
    trigger : 2

  },
  {
    id : 11 ,
    message : "merci de choisir MAFI, quelle est votre question ?",
    trigger : 2
  },
  {
    id :12,
    message : "domaine",
    trigger : 2

  },
  {
    id: 6,
    message: "AU REVOIR"
    },
  

]
const ChatBoot = () => {
  return (
    <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default ChatBoot;