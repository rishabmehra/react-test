import { removeDuplicateUtils, removeObjWithId } from '../utils';

describe('Utils', () =>{
   it('should remove the duplicated values from array of object', () =>{
       const input =  [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        },
        {
            id: 4,
            first_name: "Tracey",
            last_name: "Ramos",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]

      const output = [
        {
            id: 4,
            first_name: "Eve",
            last_name: "Holt",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
          },
          {
            id: 5,
            first_name: "Charles",
            last_name: "Morris",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
          },
          {
            id: 6,
            first_name: "Tracey",
            last_name: "Ramos",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
          }
      ]
      
      expect(removeDuplicateUtils(input,'id')).toEqual(output);
   });

   it('should remove the object with respect to given id from array of object',()=>{
       
    const input = [
        {
            id: 4,
            first_name: "Eve",
            last_name: "Holt",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
          },
          {
            id: 5,
            first_name: "Charles",
            last_name: "Morris",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
          },
          {
            id: 6,
            first_name: "Tracey",
            last_name: "Ramos",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
          }
      ]

      const output = [
         {
            id: 5,
            first_name: "Charles",
            last_name: "Morris",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
          },
          {
            id: 6,
            first_name: "Tracey",
            last_name: "Ramos",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
          }
      ]

      expect(removeObjWithId(input,4)).toEqual(output);
       
   });
})