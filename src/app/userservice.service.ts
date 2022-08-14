import { Injectable } from '@angular/core';
import { listing } from './add-listing/listing';
import { myUser } from './sign-up/myUser';
import { favList } from './view/myFav';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private listOfUsers: myUser[] = [
    {
      name: 'YesMan',
      email: 'sample@email.com',
      password: "password123"
    },
    {
      name: 'IceBox',
      email: 'other@xyz.com',
      password: "password456"
    }
  ];
    
  public listOfListings: listing[] = [
    {
      name: 'Johor Strait Lighthouse',
      address: '10 Tuas West Dr 638404',
      image: "https://media.timeout.com/images/105681226/1024/768/image.jpg",
      descr: "Journey to the far end of the north for a sight to behold. Located at the tip of our Raffles Marina's breakwater, the charming 12-metre lighthouse overlooks the Tuas Second Link bridge, and lights the way for yachts navigating into and out of the marina. After soaking up the stunning scenery complete with the sea view and breeze, head to Raffles Marina Club and take a relaxing stroll along the promenade. While you're at it, check out the luxe yachts docked at the marina.",
      open: "24/7",
      type: "Sightseeing"
    },
    {
      name: 'Boh Geh Uncle Canteen',
      address: '398 Piccadilly',
      image: "https://media.timeout.com/images/105825006/1024/768/image.jpg",
      descr: "There are plenty of spaces in Seletar that feel like a step back in time and Boh Geh Uncle Canteen is definitely one of those spots. The makeshift canteen is a popular spot for those working in the area, cyclists, joggers and also curious sorts. Don't expect anything for the 'gram – firstly, photos and videos are not allowed in the canteen and also, it really is a part of the former Seletar Camp that has been around from 1969. And it still feels like the late 60s at this corner where patrons sit on rickety tables and mismatched stools and benches under a DIY tarp canopy. Food-wise, there are only three stalls here – a cai png shop, a Muslim food stall and a drinks stall run by Boh Geh Uncle himself – who is also the owner. Prices are super cheap for food and drinks.",
      open: "Mon-Fri 6am-1:30pm",
      type: "Food"
    },
    {
      name: 'Smith Marine Floating Restaurant',
      address: 'Johor Strait',
      image: "https://media.timeout.com/images/105681260/1024/768/image.jpg",
      descr: "Fancy digging into the freshest catch of the day at a modern kelong, floating on the waters between Pulau Ubin and Changi Point Ferry Terminal? Take a 15-minute boat ride to the Smith Marine Floating Restaurant where you can tuck into a wide spread of seafood – think sambal mussel ($28), chilli crab (from $68), steamed prawn (from $35), calamari ($28), and steamed lobster with pumpkin sauce (from $120). A set menu for up to 8 people starts from $480, and you get the best of each. If you want level up the experience, head to the resto's pond and catch your very own seabass or snapper at $35.",
      open: "Daily 10am-8pm",
      type: "Food"
    },
    {
      name: 'Jurong Eco Garden',
      address: 'Jurong Eco Garden, Cleantech Loop',
      image: "https://media.timeout.com/images/105699349/1024/768/image.jpg",
      descr: "Hidden in the industrial CleanTech Park in Jurong is a tranquil eco-garden located next to the Thow Kwang Pottery Jungle. Go on an educational journey at this five-hectare park that covers over four main discovery zones – the Summit Forest, the Wildlife Corridor, the Stream Ravine and the Freshwater Swamp Forest. There are also some installations around the park that showcase ecological efforts and ideas like recycling rainwater, composting, and more so the young ones can pick up good habits about living in an urban green city. What's a park without some art and sculptures? Go on a stroll to check out the ceramic art around the trails and climb up the viewing platform to get a vast view of the entire park. The eco-garden is also home to plenty of flora and fauna like several butterfly species, birds, and dragonflies.",
      open: "24/7",
      type: "Sightseeing"
    }
  ];

  public myFavorites: favList[] = [
    {
      user: 'Jane',
      name: 'Johor Strait Lighthouse',
      address: '10 Tuas West Dr 638404',
      image: "https://media.timeout.com/images/105681226/1024/768/image.jpg",
      descr: "Journey to the far end of the north for a sight to behold. Located at the tip of our Raffles Marina's breakwater, the charming 12-metre lighthouse overlooks the Tuas Second Link bridge, and lights the way for yachts navigating into and out of the marina. After soaking up the stunning scenery complete with the sea view and breeze, head to Raffles Marina Club and take a relaxing stroll along the promenade. While you're at it, check out the luxe yachts docked at the marina.",
      open: "24/7",
      type: "Sightseeing"
    },
  ]
  constructor() { }

    getUsers(): myUser[] {
      return this.listOfUsers;
    }
    addUser(item: myUser): void {
      this.listOfUsers.push(item);
    }

    getListing(): listing[] {
      return this.listOfListings;
    }

    addListing(item: listing): void{
      this.listOfListings.push(item);
    }

    addFav(item: favList): void{
      this.myFavorites.push(item);
    }
}
