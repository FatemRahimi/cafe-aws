CREATE TABLE IF NOT EXISTS menu(
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR (250) NOT NULL,
  category VARCHAR(9) NOT NULL,
  price DECIMAL(4,2) NOT NULL,
  img VARCHAR(250) NOT NULL,
  descript VARCHAR (250) NOT NULL
  );


INSERT INTO menu(title,category,price,img,descript)
VALUES (
  'ALL ORGANIC CHEFS CHOICE SALAD BOWL',
  'Lunch',
  15.99,
  'images/image1_salad.jpg',
'Freshest of fresh salad with your choice of vegetarian or meat topping. Just the perfect lunch item');

INSERT INTO menu(title,category,price,img,descript)
VALUES ( 'CLASSIC TRIPLE CHEESEBURGER',
  'Lunch',
  10.99,
  'images/image2_burger.jpg',
  'Chocolate overnight organic oats with almond milk, cocoa powder, banana puree & almond butter, topped with cacao nib');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('RASPBERRY, BANANA & ALMOND OVERNIGHT OATS SHAKE',
  'Breakfast',
  12.99,
  'images/image3_shake.jpg',
  'Freshly baked croissant filled with cheese & ham.');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('MANGO, RASPBERRY & CHOCOLATE YOGHURT SHAKE',
  'Breakfast',
  16.99,
  'images/image4_chocoshake.jpg',
  'Greek style yoghurt with mango puree, almond butter, granola & fresh raspberries.');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('BEETROOT FALAFEL & FETA BURGER',
  'Lunch',
  25.99,
  'images/image5_burger.jpg',
  'Beetroot falafel with British red cabbage ‘slaw, pea & mint houmous, Greek feta & spinach in a spinach tortilla');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('PESTO & PARMESAN PASTA',
  'Lunch',
  23.99,
  'images/image6_pasta.jpg',
  'Our homemade pesto pasta topped with rocket, cherry tomatoes, a generous helping of parmesan & basil.');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('KOREAN BBQ NOODLE BOWL WITH SATAMI FISH',
  'Lunch',
  25.99,
  'images/image7_fish.jpg',
  'Korean BBQ chicken, sesame noodles, British red cabbage ‘slaw, edamame beans & grated carrot with a sweet & spicy gochujang sauce');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('BOMBAY BHAJI KHOBEZ WRAP',
  'Lunch',
  13.99,
  'images/image8_wrap.jpg',
  'Our Bombay inspired chickpea bhaji mix, with vegan minted tzatziki, spicy tomato & caramelised onion chutney & baby leaf spinach.');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('CHICKEN SATAY NOODLE BOWL WITH SMOKED SALMON',
  'Dinner',
  27.99,
  'images/image9_fish.jpg',
  'Sticky chilli chicken with sesame noodles, edamame beans, grated carrots, crispy onions, rocket, cos & spinach. Topped with salted peanuts & satay dressing.');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('HONEY ROASTED ALMONDS WITH STRAWBERRIES AND CREAM SHAKE',
  'Lunch',
  28.99,
  'images/image10_shake.jpg',
  'Roasted harissa butternut & cauliflower with chunky roasted peppers, lemon turmeric cous cous, houmous & tangy lemon vinaigrette');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('MARVELLOUS MEZZE',
  'Dinner',
  21.99,
  'images/image11_salad.jpg',
  'Chickpea falafel with our 6 grain mix, British red cabbage ‘slaw, grated carrot, cucumber, spring onions, coriander, cos & spinach. Topped with cherry tomatoes, houmous & vegan minted tzatziki.');

INSERT INTO menu(title,category,price,img,descript)
VALUES ('BRITISH RED CABBAGE & BEETROOT FALAFEL BOWL WITH ORGANIC QUAIL EGGS',
  'Lunch',
  16.99,
  'images/image12_eggs.jpg',
  'British red cabbage ‘slaw, beetroot falafel, Greek feta, pecans, pea & mint houmous on our 5 grain mix');