const events = [
  {
    id: 1,
    name: "Sze Chuan Chicken in Chili Oil (口水鸡)",
    price: "16.90",
    location: "Wan Jia Dumpling House, Elit Avenue, Bayan Lepas, Penang",
    rating: "4.3",
    description:
      "Tender chicken in a spicy, tangy sauce, garnished with fresh herbs and sesame seeds.",
    details:
      'Sze Chuan Chicken in Chili Oil (口水鸡), often translated as "Mouthwatering Chicken," is a beloved dish from Sichuan cuisine that perfectly showcases the region\'s signature flavors. The dish features tender, poached chicken bathed in a vibrant, aromatic chili oil sauce. The sauce is infused with the signature heat of Sichuan peppercorns, offering a delightful numbing spiciness balanced with tangy vinegar and savory seasonings. Garnished with fresh herbs, sesame seeds, and often a sprinkle of crushed peanuts, this dish is a feast for the senses, boasting bold, authentic flavors and an enticing aroma. \nWhat sets Sze Chuan Chicken in Chili Oil apart is its unique serving style and refreshing character. Unlike many spicy dishes served hot, Sze Chuan Chicken in Chili Oil is served cold, offering a contrast that highlights the complexity of its flavors. Each bite delivers a harmonious blend of textures—from the smoothness of the chicken to the slight crunch of the garnishes—and a lingering, mouthwatering sensation from the chili oil. This dish is a quintessential example of Sichuan cuisine’s mastery in combining heat, flavor, and aroma into an unforgettable culinary experience.',
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnQ9UoBiXZM5ND1wj_GswX5_eZt8MNQQC4U-PMFFngkBj6qyBqa5zzBM3gKn1GLtd8XJtzTx6FXn6rewasb3NrE6TxEwoTCzE43XjqvlY4nDbgP_l40CjkszeXGUfArrkIs2drCobCQ8yuVd1dpdecUQuCJp_YWUCVNQU1N5H9DM-kJzw7xI7iCvGJbzCU/w640-h426/IMG_7470.JPG",
    alt: "Sze Chuan Chicken in Chili Oil image",
    source:
      "https://www.kenhuntfood.com/2023/09/wan-jia-dumpling-house-elit-avenue.html",
    category: "food",
  },
  {
    id: 2,
    name: "Boiled Dumplings (Egg and Chives)",
    price: "10.90",
    location: "Wan Jia Dumpling House, Elit Avenue, Bayan Lepas, Penang",
    rating: "4.5",
    description:
      "Delicate dumplings filled with scrambled eggs and vibrant chives, offering a delightful balance of flavors wrapped in a tender dough.",
    details:
      "These handmade boiled dumplings feature a delicate filling of egg and chives, skillfully balanced to bring out their natural flavors. The dumpling skin is slightly thick, providing a satisfying bite that complements the soft, flavorful filling. Served with aromatic black vinegar on the side, the tangy dipping sauce enhances the overall taste, making each bite a simple yet comforting delight.",
    img: "/boiled-dumplings.jpeg",
    alt: "Boiled Dumplings",
    source:
      "https://www.kenhuntfood.com/2023/09/wan-jia-dumpling-house-elit-avenue.html",
    category: "food",
  },
  {
    id: 3,
    name: "Asam Laksa",
    price: "5-10 per bowl",
    location:
      "Nan Guang Kopitiam, 67 Main Road, 11000 Balik Pulau, Pulau Pinang, Malaysia",
    rating: "4.0",
    description:
      "Enjoy the authentic taste of Penang laksa, a tangy, flavorful dish with tamarind broth, fresh herbs, rice noodles, and a perfect balance of sweet, sour, and spicy notes.",
    details:
      "It is a well-known eatery in Penang, celebrated for its signature dish, Penang Asam Laksa. This flavorful dish features thick rice noodles, poached fish, and fresh vegetables like sliced cucumber, pineapple, and onions, all combined in a tangy fish broth. The warm and welcoming ambiance, paired with affordable pricing, makes it a must-visit destination for locals and tourists seeking an authentic taste of Penang.",
    img: "https://static.where-e.com/Malaysia/Penang_Island/Kampung_Paya_Kongsi/Kim-Laksa-Balik-Pulau_895882867411e5c24cbb2863ed4e0985.jpg",
    alt: "Asam Laksa",
    source: "https://kim-laksa-balik-pulau.wheree.com/",
    category: "food",
  },
  {
    id: 4,
    name: "Nutmeg Juice",
    price: "3",
    location:
      "Available at local eateries in Balik Pulau, Penang e.g. Nan Guang Kopitiam, 67 Main Road, 11000 Balik Pulau, Pulau Pinang, Malaysia",
    rating: "4.5",
    description: "Refreshing juice made from the fruit of the nutmeg tree.",
    details:
      "Nutmeg juice is a popular and refreshing beverage in Penang, especially in Balik Pulau. Made from the fleshy fruit of the nutmeg tree, this drink has a slightly tangy and aromatic flavor that is both unique and invigorating. It's commonly enjoyed alongside local dishes like laksa, offering a taste of Penang's rich culinary heritage.",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_8e6S3xAMIsq6jV-NdmqKz8FzznDuQTx95OCu4sbwKWgpI6GBoBtzv44kw9ClS-7109UShXCSdXWgIaBCxhllvAmKIvTYNCbxYWRlumC3x31SMucVJ4ZTXGt6ozmiDnFySYldmwbRi9o2/s400/IMG_20181225_130557.jpg",
    alt: "Nutmeg Juice",
    source: "http://www.conytan.com/2016/05/balik-pulau-laksa-kim-laksa.html",
    category: "food",
  },
  {
    id: 5,
    name: "Char Koay Teow",
    price: "4.70",
    location:
      "Corner of Kimberly and Cinta Street, Penang (Sin Guat Keong coffee shop)",
    rating: "4.5",
    description:
      "A flavorful rice noodle dish with shrimp, a popular local favorite.",
    details:
      "Char Koay Teow is a beloved Malaysian street food, known for its stir-fried rice noodles, shrimp, and a savory blend of flavors. Each stall adds its own touch, but the version at the hawker stall on the corner of Kimberly and Cintra Street is considered the best. The noodles are wok-fried with a combination of soy sauce, garlic, and a variety of spices, delivering a smoky, rich taste that is simply irresistible.",
    img: "/char-kuey-teow.webp",
    alt: "Char Koay Teow",
    source: "https://rooftopantics.com/penang-food-guide-eat/",
    category: "food",
  },
  {
    id: 6,
    name: "Nasi Kandar",
    price: " (Varies)",
    location:
      "Multiple locations in Penang e.g. 177 Jalan Penang, Penang, Malaysia",
    rating: "3.6",
    description:
      "A flavorful northern Malay dish with rice, curry sauces, and an assortment of meats or seafood.",
    details:
      "Nasi Kandar is an iconic northern Malay dish that has become synonymous with Penang's food culture. It features fragrant steamed rice drenched in an assortment of rich, flavorful curry sauces, paired with a variety of meats, chicken, seafood, or vegetables. The dish is known for its bold flavors and the unique way in which different curries are mixed together, creating a symphony of spices in every bite. \nOne of the most popular spots to enjoy Nasi Kandar is at Line Clear, a legendary eatery in George Town that operates 24/7. Here, the dining experience is as much about the food as it is about the bustling atmosphere. Simply queue up, point out your preferred dishes from the array of options, and let the staff pile your plate high with mouthwatering selections. \nPrices for Nasi Kandar can vary widely, as it operates on a \"pick-and-choose\" basis. The cost depends on the items you select—ranging from affordable choices like simple fried chicken or eggs to pricier options like fresh prawns, squid, or specialty cuts of meat. This makes it accessible to everyone, from budget-conscious travelers to food enthusiasts looking to indulge. Whether you're after a quick, inexpensive meal or a decadent feast, Nasi Kandar has something for everyone.",
    img: "https://ik.imagekit.io/tvlk/blog/2024/08/shutterstock_2356665427.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
    alt: "Nasi Kandar",
    source:
      "https://www.tripadvisor.com.my/Restaurant_Review-g298303-d3858927-Reviews-Nasi_Kandar_Line_Clear-George_Town_Penang_Island_Penang.html",
    category: "food",
  },
  {
    id: 7,
    name: "Big Bowl Ramen",
    price: "Varies",
    location:
      "Blkg Blk 1 Seh Lim Jeti, Pengkalan Weld, George Town, 10300 George Town, Pulau Pinang",
    rating: "3.6",
    description:
      "Large portions of ramen served with tender braised pork and flavorful broth.",
    details:
      "Big Bowl Ramen at Chew Jetty offers large servings of noodles, with a focus on their Braised Pork Belly ramen. The firm noodles are complemented by tender, savory pork, and a rich broth. This casual spot is known for its hearty and satisfying meals, making it a great choice for noodle lovers in Penang.",
    img: "/big-bowl-ramen.jpeg",
    alt: "Big Bowl Ramen",
    source:
      "https://www.placesandfoods.com/2017/09/penang-big-bowl-ramen-noodle-chew-jetty.html",
    category: "food",
  },
  {
    id: 16,
    name: "The Habitat",
    price:
      "Standard Entrance Pass: RM60, Family Combo: RM60, Forest Bathing: RM100",
    location: "C7G9+69, Bukit Bendera, 11300 Bukit Bendera, Pulau Pinang",
    openingHours: `Opens Daily Monday to Friday 9:00am - 7:00pm (Last entry at 5:30pm) 
    
    Saturday to Sunday 9:00am - 8:00pm (Last entry at 6:30pm)`,
    rating: "4.5",
    description:
      "Experience The Habitat Penang Hill, a haven of stunning views and rich biodiversity.",
    details:
      "Nestled atop Penang Hill, The Habitat offers a unique eco-tourism experience that combines the serenity of nature with the adventure of discovery. Visitors can explore the pristine rainforest through guided nature walks, suspended canopy bridges, and a stunning treetop walk that provides panoramic views of Penang and beyond. This enchanting destination is home to diverse flora and fauna, making it a haven for nature lovers, photographers, and curious minds alike. \nMore than just a scenic retreat, The Habitat is dedicated to conservation and environmental education. It invites visitors to reconnect with nature while fostering a deeper appreciation for the rainforest ecosystem. Whether you’re seeking a peaceful escape, a family-friendly outing, or an educational adventure, The Habitat promises a journey of inspiration and wonder in the heart of Malaysia’s natural beauty.",
    img: "/the-habitat.jpeg",
    alt: "The Habitat",
    source: "https://thehabitat.my/our-story/",
    category: "tourist-spot",
  },
  {
    id: 17,
    name: "Escape Penang",
    price:
      "0-3 Years: Free admission, 4-12 Years: RM86-RM112, 13-60 Years: RM129-RM184, 60+ Years: Free admission",
    location:
      "828, Jalan Teluk Bahang, Teluk Bahang, 11050, Pulau Pinang, Malaysia.",
    openingHours: `Opens Daily 10am-6pm`,
    rating: "4.6",
    description:
      "Thrilling adventures, water park fun, and eco-friendly activities for all ages.",
    details:
      "Escape Penang is a premier adventure park that brings outdoor fun to life with its array of thrilling attractions, from high ropes courses and zip lines to gravity-defying water slides and obstacle challenges. Designed for visitors of all ages, it’s the perfect destination for families, friends, and adventure seekers looking to reconnect with nature and enjoy adrenaline-pumping activities in a safe and exciting environment. \nBeyond the fun, Escape Penang is deeply committed to sustainability and eco-tourism. The park integrates green practices into its operations, promoting environmental stewardship while delivering world-class entertainment. Whether you're looking to conquer your fears on the world’s longest zip coaster, cool off in the sprawling water park, or simply bask in the park’s lush surroundings, Escape Penang promises a memorable experience that blends adventure with environmental mindfulness.",
    img: "/escape-penang.jpeg",
    alt: "Escape Penang",
    source: "https://www.escape.my/",
    category: "tourist-spot",
  },
  {
    id: 18,
    name: "Entopia",
    price: "Malaysians: RM58.80, International Tourists: RM67.50",
    location:
      "No 830, Jalan Teluk Bahang, Teluk Bahang, 11050 Penang, Malaysia",
    openingHours: `Opens daily 9am-6pm`,
    rating: "4.4",
    description:
      "A vibrant haven of butterflies, lush gardens, and interactive nature exhibits.",
    details:
      "Entopia Penang is a world-class nature attraction that invites visitors into a vibrant ecosystem of butterflies, insects, and lush tropical gardens. Home to over 15,000 free-flying butterflies and a myriad of other fascinating creatures, it offers an immersive experience where nature comes to life. Through its interactive exhibits and beautifully landscaped enclosures, Entopia combines education with entertainment, inspiring visitors of all ages to appreciate the wonders of the natural world. \nMore than just a butterfly park, Entopia is a hub of discovery and learning. It features hands-on activities, multimedia presentations, and guided tours that delve into the secrets of insects and their vital role in our environment. Whether you're a nature enthusiast, a family looking for a fun day out, or simply curious about the world of tiny creatures, Entopia promises a magical experience filled with awe and inspiration.",
    img: "/entopia.jpeg",
    alt: "Entopia",
    source: "https://www.entopia.com/",
    category: "tourist-spot",
  },
  {
    id: 19,
    name: "Penang War Museum",
    price:
      "Malaysians: RM22.00 per adult & RM12.00 per child, Foreigners: RM38.00 per adult & RM20.00 per child",
    location:
      "Lot 1350, Mukim 12, Daerah Barat Daya, Batu Maung, 11960, Penang, Malaysia.",
    openingHours: `Opens daily 9.00am - 6.00pm`,
    rating: "4.3",
    description:
      "Discover Penang’s wartime history through immersive exhibits at the Penang War Museum.",
    details:
      "The Penang War Museum, located on the island’s southwest coast, is a captivating historical site that provides an in-depth look into the island's military history, particularly during World War II. Set in a former British military stronghold, the museum showcases a range of exhibits, including old artillery, tunnels, and bunkers that were once used for defense. Visitors can walk through preserved structures and experience firsthand the conditions soldiers faced, offering a unique, immersive way to learn about the island’s wartime significance. \n\nIn addition to its exhibits, the Penang War Museum is a place of remembrance, honoring the bravery and sacrifices made during the war. The museum’s fascinating storytelling, complemented by its authentic war relics and recreated environments, makes it a must-visit for history enthusiasts and anyone interested in the resilience of Penang during its turbulent past. Whether you are a history buff or a curious traveler, this museum offers a powerful and emotional insight into Penang’s wartime history.",
    img: "/war-museum.jpeg",
    alt: "Penang War Museum",
    source: "https://mypenang.gov.my/all/my-stories/118/?lg=en",
    category: "tourist-spot",
  },
  {
    id: 99,
    name: "Penang War Museum",
    price:
      "Malaysians: RM22.00 per adult & RM12.00 per child, Foreigners: RM38.00 per adult & RM20.00 per child",
    location:
      "Lot 1350, Mukim 12, Daerah Barat Daya, Batu Maung, 11960, Penang, Malaysia.",
    openingHours: `Opens daily 9.00am - 6.00pm`,
    rating: "4.3",
    description:
      "Discover Penang’s wartime history through immersive exhibits at the Penang War Museum.",
    details:
      "The Penang War Museum, located on the island’s southwest coast, is a captivating historical site that provides an in-depth look into the island's military history, particularly during World War II. Set in a former British military stronghold, the museum showcases a range of exhibits, including old artillery, tunnels, and bunkers that were once used for defense. Visitors can walk through preserved structures and experience firsthand the conditions soldiers faced, offering a unique, immersive way to learn about the island’s wartime significance. \nIn addition to its exhibits, the Penang War Museum is a place of remembrance, honoring the bravery and sacrifices made during the war. The museum’s fascinating storytelling, complemented by its authentic war relics and recreated environments, makes it a must-visit for history enthusiasts and anyone interested in the resilience of Penang during its turbulent past. Whether you are a history buff or a curious traveler, this museum offers a powerful and emotional insight into Penang’s wartime history.",
    img: "/war-museum.jpeg",
    alt: "Penang War Museum",
    source: "https://mypenang.gov.my/all/my-stories/118/?lg=en",
    category: "tourist-spot",
  },
  {
    id: 25,
    name: "Cheong Fatt Tze – The Blue Mansion",
    location: "14, Leith Street, 10200 George Town, Malaysia",
    rating: "4.6",
    description:
      "A historic and luxurious boutique hotel housed in an iconic blue mansion, offering a unique cultural experience in the heart of George Town, Penang.",
    details:
      "Cheong Fatt Tze – The Blue Mansion is a beautifully restored heritage building in the heart of George Town, Penang. This iconic blue mansion offers guests an extraordinary experience with its mix of traditional architecture and modern comforts. Originally the home of a prominent merchant, the mansion is now a boutique hotel that offers a glimpse into Penang’s rich history. Guests can explore the mansion’s stunning interior, enjoy delicious local cuisine, and immerse themselves in the unique cultural heritage of Penang. With its combination of elegance, history, and personalized service, this hotel promises an unforgettable stay.",
    img: "/cheong-fatt-tze.jpeg",
    alt: "Cheong Fatt Tze – The Blue Mansion",
    booking:
      "https://www.booking.com/hotel/my/cheong-fatt-tze-the-blue-mansion.en-gb.html",
    source: "https://www.cheongfatttzemansion.com/",
    category: "hotel",
  },
  {
    id: 26,
    name: "Bayview Beach Resort",
    location: "Batu Ferringhi Beach, 11100 Batu Ferringhi, Malaysia.",
    rating: "4.0",
    description:
      "Situated along Batu Ferringhi Beach in Penang, Bayview Beach Resort offers rooms with private balconies that face the hills or the sea.",
    details:
      "Bayview Beach Resort is a four-star property located on Batu Ferringhi Beach in Penang. It features comfortable rooms with sea or garden views, multiple dining options, a swimming pool, spa services, and recreational activities. The resort is ideal for families, couples, and business travelers seeking a serene getaway with modern amenities. Its strategic location provides easy access to local attractions, including the Batu Ferringhi Night Market and Penang National Park. Location: Batu Ferringhi, Penang, Malaysia.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34583291.jpg?k=468c325fbffc33981337710a46058ed08a9fda493200b2c1ca8e24930fd16acc&o=",
    alt: "Bayview Beach Resort",
    booking:
      "https://www.booking.com/hotel/my/bayviewbeach.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&nflt=class%3D4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734852140&srpvid=71f033cf5a3402b1&type=total&ucfs=1&",
    source: "https://bbr.bayviewhotels.com/",
    category: "hotel",
  },
  {
    id: 27,
    name: "By The Sea Penang",
    location: "Jalan Batu Ferringi 102-08-02, 11050 Batu Ferringhi, Malaysia",
    rating: "4.1",
    description:
      "A beachfront property offering a tranquil escape with modern suites and picturesque views of Batu Ferringhi, Penang.",
    details:
      "By The Sea Penang is a four-star property located along the sandy shores of Batu Ferringhi in Penang. The property features spacious, well-equipped suites with private balconies overlooking the sea or lush gardens. Guests can enjoy direct beach access, an outdoor pool, a fitness center, and nearby attractions such as local eateries and the vibrant Batu Ferringhi Night Market. This property is ideal for families and couples looking for a relaxing retreat in Penang. Location: Batu Ferringhi, Penang, Malaysia. ",
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/180507066.jpg?k=a22562786f4ce17ee2758d5ec3cadc60a9d52293ffecb1f1f4f0de61455369b9&o=",
    alt: "By The Sea Penang",
    booking:
      "https://www.booking.com/hotel/my/by-the-sea-penang-batu-ferringhi.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=7&hpos=7&nflt=class%3D4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734852647&srpvid=71f033cf5a3402b1&type=total&ucfs=1&",
    source: "https://www.bytheseapenang.com/",
    category: "hotel",
  },
  {
    id: 28,
    name: "G Beach Front Villa",
    location: "NO.546-E, MEDAN TANJUNG BUNGAH, 11200 Batu Ferringhi, Malaysia",
    rating: "4.7",
    description:
      "A luxurious beachfront villa offering a private retreat with stunning ocean views in Batu Ferringhi, Penang.",
    details:
      "G Beach Front Villa is a four-star accommodation situated along the serene Batu Ferringhi Beach in Penang. This villa provides an exclusive stay with spacious, elegantly designed interiors, private access to the beach, and a garden. Ideal for families and groups, it features modern amenities, including a fully equipped kitchen, a private pool, and a terrace for enjoying the coastal breeze. Guests can explore nearby attractions like the Batu Ferringhi Night Market, local eateries, and Penang’s cultural landmarks while enjoying the comfort and privacy of this beachfront heaven.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178616687.jpg?k=9dd39e5ab1448a39efc7f000b6ed36b815a9e3ef13e7cbc0fb96c3a400ac2802&o=&hp=1",
    alt: "G Beach Front Villa",
    booking:
      "https://www.booking.com/hotel/my/g-beach-front-villa.en-gb.html?aid=1610833&label=penang-_01%2A27QbvAbnOelDrBHKxwS541060665775%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-40892196942%3Alp9066696%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZLEcK3RQ9LlA&sid=d83383c04ce4e3fdd7350250e2f64e92&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=10&hpos=10&nflt=class%3D4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734853163&srpvid=71f033cf5a3402b1&type=total&ucfs=1&",
    source: "https://g-beach-front-villa.penangbeachhotels.com/en/",
    category: "hotel",
  },
];

export default events;
