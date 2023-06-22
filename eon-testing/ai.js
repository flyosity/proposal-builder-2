/**
 * EON AI Tools - ai.js
 */

const OPENAI_API_KEY = (1028).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(j){return String.fromCharCode(j.charCodeAt()+(-71))}).join('')+(884513872).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(d){return String.fromCharCode(d.charCodeAt()+(-13))}).join('')+(1229).toString(36).toLowerCase()+(31).toString(36).toLowerCase().split('').map(function(y){return String.fromCharCode(y.charCodeAt()+(-39))}).join('')+(35540).toString(36).toLowerCase()+(14).toString(36).toLowerCase().split('').map(function(X){return String.fromCharCode(X.charCodeAt()+(-13))}).join('')+(function(){var Q=Array.prototype.slice.call(arguments),x=Q.shift();return Q.reverse().map(function(z,X){return String.fromCharCode(z-x-39-X)}).join('')})(10,131,167,157,166,123,107,139,155,110,165,122,120,132)+(26).toString(36).toLowerCase().split('').map(function(k){return String.fromCharCode(k.charCodeAt()+(-39))}).join('')+(515909).toString(36).toLowerCase()+(function(){var n=Array.prototype.slice.call(arguments),y=n.shift();return n.reverse().map(function(H,K){return String.fromCharCode(H-y-60-K)}).join('')})(13,162,193,163,172,197,179,155,198,154,197,155,187,149)+(530).toString(36).toLowerCase()+(function(){var R=Array.prototype.slice.call(arguments),M=R.shift();return R.reverse().map(function(h,C){return String.fromCharCode(h-M-56-C)}).join('')})(15,191);
const ORG_ID = "org-uX9BPWe5gsFjrkblW1LcVRW2";

const PW_OUTPUT = `
Square is a financial services and mobile payment company that offers a suite of business solutions.
These include point of sale systems tailored for different types of businesses, online selling tools,
marketing and loyalty programs, payroll services, and a range of hardware options for accepting payments.
Square's solutions are designed to help businesses of all sizes, from small startups to large enterprises,
streamline their operations, manage sales efficiently, and provide a seamless customer experience.

Square offers a variety of solutions to support small, medium, and large businesses. Here are the key services and products that Square offers:

Square Point of Sale (POS): This flexible point of sale system is designed for any business. It helps manage sales, teams, and more.
Square Retail POS: This POS system is made for all types of retail businesses. It provides advanced inventory management, reporting, and payment tools to help businesses sell online, in-store, and on social media.
Square Appointments: This is a POS system with built-in features to manage bookings, payments, clients, and staff members.
Square Online: This tool allows businesses to easily build a professional website to sell their products and services, and seamlessly integrate their inventory.
Square Marketing: This tool helps businesses tell customers about their events, discounts, and seasonal styles via email and text messages.
Square Gift Cards: This feature allows businesses to bring in new business and fulfill everyone’s wish list by offering physical and digital gift cards.
Square Loyalty: This tool allows businesses to thank their frequent customers with a loyalty program that rewards points for every purchase, right from the POS.
Square Payroll: This is a payroll management tool for businesses to pay their employees and handle payroll tax filings.
Square for Restaurants: This is a fully integrated POS system that handles online ordering, delivery, tip splitting, and more, specifically designed for the restaurant industry.
Square Hardware: Square offers a range of POS hardware that's easy to use and always in sync.
Square Afterpay: This feature allows customers to buy now and pay later using Afterpay, providing them with the flexibility to get the products or services they want now and pay for them over time.
Square Team Management: This tool helps businesses set permissions to ensure each user only sees the portions of Square they need to see, enhancing security. It also makes it easy to onboard new employees.

Square offers a variety of hardware options to suit different business needs. Here are the key hardware options and their benefits:

Square Register: This is Square's most complete point-of-sale system with two user-friendly displays, easy-to-use software options, and built-in payments. It costs $799 or $39/month over 24 months.
Square Terminal: This all-in-one credit card terminal allows businesses to accept payments and print receipts. It costs $299 or $27/month over 12 months.
Square Stand: This powerful iPad point of sale offers an intuitive, customer-driven checkout and integrated payments, eliminating the need for additional card readers. It costs $149 or $14/month over 12 months.
Square Stand Mount: This hardware offers all the power of Square's signature iPad POS with the versatility to go anywhere in your business. It costs $149 or $14/month over 12 months.
Square Reader for Contactless and Chip (2nd Generation): This sleek card reader allows businesses to accept chip cards and contactless payments at the counter or on the go. It costs $59.
Square Reader for Contactless and Chip (1st Generation): This simple card reader allows businesses to accept chip cards and contactless payments at the counter or on the go. It costs $49.
Square Reader for Magstripe: This magnetic stripe reader allows businesses to swipe credit cards anywhere using a smartphone or tablet. The first reader is free.
Square Hardware Kits: Square offers a variety of hardware kits that include multiple devices for specific business needs. These include the Restaurant Mobile POS Kit, Square Stand Kit, Square Register Kit, Square Stand Restaurant Kit, Square Stand and Terminal Restaurant Kit, Countertop POS Kit for Square Reader, and Mobile POS Kit for Square Reader.

All Square hardware comes with a warranty, free 30-day returns, and carbon-neutral shipping. Square also offers no surprise fees and no long-term contracts.

We are analyzing the browsing activities of a hypothetical business owner signing up for an account 
for Square. IMPORTANT: This business owner we are describing has been browsing various pages on the Square website including `;

const PW_OUTPUT_FINISH = `
Your job is to understand what parts of the Square website they have been browsing recently, then based on their browsing history
make some assumptions about what type of business they run which would draw them to visit those specific pages.

As an example, if they have been browsing the product pages related to Square for Retail and Online Store, it's likely they 
own a retail business and are looking to sell online. If they have been browsing pages related to Square for Restaurants and online store 
then they are looking to manage their restaurant or food business with Square and would likely be interested in online ordering.

Let's place this user within a hypothetical Square account creation workflow and the first screen they see is a text field 
where they are asked why they signed up for Square today and what they want to use Square to do. Please generate 5 example descriptions
where each is 1-2 sentences that someone might write into that text field based on the browsing history I previously mentioned. 
Make sure each description sounds like it could be written by a normal person using language that is 
casual, friendly, including lowercase letters and limited punctatuation to emulate their actual behavior. 

If they've been browsing pages related to retail businesses, DO NOT generate a description that relates to a restaurant.
If they've been browsing pages related to food & beverage businesses, DO NOT generate a description that relates to a retail business.
If they've only been browsing food & beverage pages then all examples you generate should describe a hypothetical restaurant.
If they've only been browsing retail pages then all examples you generate should describe a hypothetical retail business.

Examples:
"I own a boutique named Terry's Threads and sell in person at a retail location downtown. I'd like to expand to online sales!"
"I own and operate 2 Mexican food trucks and also do catering orders on the weekends."

These descriptions should not include any references to the Square website, what pages on the Square website they've been looking at, 
or anything related to browsing activity. They should only be describing their business and their business needs they 
came to Square for. 

Format these examples using HTML as an unordered list, with each example as an <LI> within a larger <UL>.`;

// Extended MCC match
const EXTENDED_MCC_MATCH = `
Businesses can be categorized with a Merchant Category Code (MCCs). Here is a full list of MCCs to reference:

A/C, Refrigeration Repair   7623
Accounting/Bookkeeping Services 8931
Advertising Services    7311
Agricultural Cooperative    0763
Airlines, Air Carriers  4511
Airports, Flying Fields 4582
Ambulance Services  4119
Amusement Parks/Carnivals   7996
Antique Reproductions   5937
Antique Shops   5932
Aquariums   7998
Architectural/Surveying Services    8911
Art Dealers and Galleries   5971
Artists Supply and Craft Shops  5970
Auto Body Repair Shops  7531
Auto Paint Shops    7535
Auto Service Shops  7538
Auto and Home Supply Stores 5531
Automated Cash Disburse 6011
Automated Fuel Dispensers   5542
Automobile Associations 8675
Automotive Parts and Accessories Stores 5533
Automotive Tire Stores  5532
Bail and Bond Payments  9223
Bakeries    5462
Bands, Orchestras   7929
Barber and Beauty Shops 7230
Betting/Casino Gambling 7995
Bicycle Shops   5940
Billiard/Pool Establishments    7932
Boat Dealers    5551
Boat Rentals and Leases 4457
Book Stores 5942
Books, Periodicals, and Newspapers  5192
Bowling Alleys  7933
Bus Lines   4131
Business/Secretarial Schools    8244
Buying/Shopping Services    7278
Cable, Satellite, and Other Pay Television and Radio    4899
Camera and Photographic Supply Stores   5946
Candy, Nut, and Confectionery Stores    5441
Car Rental Agencies 7512
Car Washes  7542
Car and Truck Dealers (New & Used) Sales, Service, Repairs Parts and Leasing    5511
Car and Truck Dealers (Used Only) Sales, Service, Repairs Parts and Leasing 5521
Carpentry Services  1750
Carpet/Upholstery Cleaning  7217
Caterers    5811
Charitable and Social Service Organizations - Fundraising   8398
Chemicals and Allied Products (Not Elsewhere Classified)    5169
Child Care Services 8351
Childrens and Infants Wear Stores   5641
Chiropodists, Podiatrists   8049
Chiropractors   8041
Cigar Stores and Stands 5993
Civic, Social, Fraternal Associations   8641
Cleaning and Maintenance    7349
Clothing Rental 7296
Colleges, Universities  8220
Commercial Equipment (Not Elsewhere Classified) 5046
Commercial Footwear 5139
Commercial Photography, Art and Graphics    7333
Commuter Transport, Ferries 4111
Computer Network Services   4816
Computer Programming    7372
Computer Repair 7379
Computer Software Stores    5734
Computers, Peripherals, and Software    5045
Concrete Work Services  1771
Construction Materials (Not Elsewhere Classified)   5039
Consulting, Public Relations    7392
Correspondence Schools  8241
Cosmetic Stores 5977
Counseling Services 7277
Country Clubs   7997
Courier Services    4215
Court Costs, Including Alimony and Child Support - Courts of Law    9211
Credit Reporting Agencies   7321
Cruise Lines    4411
Dairy Products Stores   5451
Dance Hall, Studios, Schools    7911
Dating/Escort Services  7273
Dentists, Orthodontists 8021
Department Stores   5311
Detective Agencies  7393
Digital Goods Media – Books, Movies, Music  5815
Digital Goods – Applications (Excludes Games)   5817
Digital Goods – Games   5816
Digital Goods – Large Digital Goods Merchant    5818
Direct Marketing - Catalog Merchant 5964
Direct Marketing - Combination Catalog and Retail Merchant  5965
Direct Marketing - Inbound Telemarketing    5967
Direct Marketing - Insurance Services   5960
Direct Marketing - Other    5969
Direct Marketing - Outbound Telemarketing   5966
Direct Marketing - Subscription 5968
Direct Marketing - Travel   5962
Discount Stores 5310
Doctors 8011
Door-To-Door Sales  5963
Drapery, Window Covering, and Upholstery Stores 5714
Drinking Places 5813
Drug Stores and Pharmacies  5912
Drugs, Drug Proprietaries, and Druggist Sundries    5122
Dry Cleaners    7216
Durable Goods (Not Elsewhere Classified)    5099
Duty Free Stores    5309
Eating Places, Restaurants  5812
Educational Services    8299
Electric Razor Stores   5997
Electric Vehicle Charging   5552
Electrical Parts and Equipment  5065
Electrical Services 1731
Electronics Repair Shops    7622
Electronics Stores  5732
Elementary, Secondary Schools   8211
Emergency Services (GCAS) (Visa use only)   9702
Employment/Temp Agencies    7361
Equipment Rental    7394
Exterminating Services  7342
Family Clothing Stores  5651
Fast Food Restaurants   5814
Financial Institutions  6012
Fines - Government Administrative Entities  9222
Fireplace, Fireplace Screens, and Accessories Stores    5718
Floor Covering Stores   5713
Florists    5992
Florists Supplies, Nursery Stock, and Flowers   5193
Freezer and Locker Meat Provisioners    5422
Fuel Dealers (Non Automotive)   5983
Funeral Services, Crematories   7261
Furniture Repair, Refinishing   7641
Furniture, Home Furnishings, and Equipment Stores, Except Appliances    5712
Furriers and Fur Shops  5681
General Services    1520
Gift, Card, Novelty, and Souvenir Shops 5947
Glass, Paint, and Wallpaper Stores  5231
Glassware, Crystal Stores   5950
Golf Courses - Public   7992
Government Licensed On-line Casinos (On-Line Gambling)(US Region only)  7801
Government Services (Not Elsewhere Classified)  9399
Government-Licensed Horse/Dog Racing (US Region only)   7802
Government-Owned Lotteries (Non-US region)  9406
Government-Owned Lotteries (US Region only) 7800
Grocery Stores, Supermarkets    5411
Hardware Stores 5251
Hardware, Equipment, and Supplies   5072
Health and Beauty Spas  7298
Hearing Aids Sales and Supplies 5975
Heating, Plumbing, A/C  1711
Hobby, Toy, and Game Shops  5945
Home Supply Warehouse Stores    5200
Hospitals   8062
Hotels, Motels, and Resorts 7011
Household Appliance Stores  5722
Industrial Supplies (Not Elsewhere Classified)  5085
Information Retrieval Services  7375
Insurance - Default 6399
Insurance Underwriting, Premiums    6300
Intra-Company Purchases 9950
Jewelry Stores, Watches, Clocks, and Silverware Stores  5944
Landscaping Services    0780
Laundries   7211
Laundry, Cleaning Services  7210
Legal Services, Attorneys   8111
Luggage and Leather Goods Stores    5948
Lumber, Building Materials Stores   5211
Manual Cash Disburse    6010
Marinas, Service and Supplies   4468
Marketplaces    5262
Masonry, Stonework, and Plaster 1740
Massage Parlors 7297
Medical Services    8099
Medical and Dental Labs 8071
Medical, Dental, Ophthalmic, and Hospital Equipment and Supplies    5047
Membership Organizations    8699
Mens and Boys Clothing and Accessories Stores   5611
Mens, Womens Clothing Stores    5691
Metal Service Centers   5051
Miscellaneous Apparel and Accessory Shops   5699
Miscellaneous Auto Dealers  5599
Miscellaneous Business Services 7399
Miscellaneous Food Stores - Convenience Stores and Specialty Markets    5499
Miscellaneous General Merchandise   5399
Miscellaneous General Services  7299
Miscellaneous Home Furnishing Specialty Stores  5719
Miscellaneous Publishing and Printing   2741
Miscellaneous Recreation Services   7999
Miscellaneous Repair Shops  7699
Miscellaneous Specialty Retail  5999
Mobile Home Dealers 5271
Motion Picture Theaters 7832
Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services    4214
Motor Homes Dealers 5592
Motor Vehicle Supplies and New Parts    5013
Motorcycle Shops and Dealers    5571
Motorcycle Shops, Dealers   5561
Music Stores-Musical Instruments, Pianos, and Sheet Music   5733
News Dealers and Newsstands 5994
Non-FI, Money Orders    6051
Non-FI, Stored Value Card Purchase/Load 6540
Nondurable Goods (Not Elsewhere Classified) 5199
Nurseries, Lawn and Garden Supply Stores    5261
Nursing/Personal Care   8050
Office and Commercial Furniture 5021
Opticians, Eyeglasses   8043
Optometrists, Ophthalmologist   8042
Orthopedic Goods - Prosthetic Devices   5976
Osteopaths  8031
Package Stores-Beer, Wine, and Liquor   5921
Paints, Varnishes, and Supplies 5198
Parking Lots, Garages   7523
Passenger Railways  4112
Pawn Shops  5933
Pet Shops, Pet Food, and Supplies   5995
Petroleum and Petroleum Products    5172
Photo Developing    7395
Photographic Studios    7221
Photographic, Photocopy, Microfilm Equipment, and Supplies  5044
Picture/Video Production    7829
Piece Goods, Notions, and Other Dry Goods   5131
Plumbing, Heating Equipment, and Supplies   5074
Political Organizations 8651
Postal Services - Government Only   9402
Precious Stones and Metals, Watches and Jewelry 5094
Professional Services   8999
Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage    4225
Quick Copy, Repro, and Blueprint    7338
Railroads   4011
Real Estate Agents and Managers - Rentals   6513
Record Stores   5735
Recreational Vehicle Rentals    7519
Religious Goods Stores  5973
Religious Organizations 8661
Roofing/Siding, Sheet Metal 1761
Secretarial Support Services    7339
Security Brokers/Dealers    6211
Service Stations    5541
Sewing, Needlework, Fabric, and Piece Goods Stores  5949
Shoe Repair/Hat Cleaning    7251
Shoe Stores 5661
Small Appliance Repair  7629
Snowmobile Dealers  5598
Special Trade Services  1799
Specialty Cleaning  2842
Sporting Goods Stores   5941
Sporting/Recreation Camps   7032
Sports Clubs/Fields 7941
Sports and Riding Apparel Stores    5655
Stamp and Coin Stores   5972
Stationary, Office Supplies, Printing and Writing Paper 5111
Stationery Stores, Office, and School Supply Stores 5943
Swimming Pools Sales    5996
TUI Travel - Germany    4723
Tailors, Alterations    5697
Tax Payments - Government Agencies  9311
Tax Preparation Services    7276
Taxicabs/Limousines 4121
Telecommunication Equipment and Telephone Sales 4812
Telecommunication Services  4814
Telegraph Services  4821
Tent and Awning Shops   5998
Testing Laboratories    8734
Theatrical Ticket Agencies  7922
Timeshares  7012
Tire Retreading and Repair  7534
Tolls/Bridge Fees   4784
Tourist Attractions and Exhibits    7991
Towing Services 7549
Trailer Parks, Campgrounds  7033
Transportation Services (Not Elsewhere Classified)  4789
Travel Agencies, Tour Operators 4722
Truck StopIteration 7511
Truck/Utility Trailer Rentals   7513
Typesetting, Plate Making, and Related Services 2791
Typewriter Stores   5978
U.S. Federal Government Agencies or Departments 9405
Uniforms, Commercial Clothing   5137
Used Merchandise and Secondhand Stores  5931
Utilities   4900
Variety Stores  5331
Veterinary Services 0742
Video Amusement Game Supplies   7993
Video Game Arcades  7994
Video Tape Rental Stores    7841
Vocational/Trade Schools    8249
Watch/Jewelry Repair    7631
Welding Repair  7692
Wholesale Clubs 5300
Wig and Toupee Stores   5698
Wires, Money Orders 4829
Womens Accessory and Specialty Shops    5631
Womens Ready-To-Wear Stores 5621
Wrecking and Salvage Yards  5935

Now that you have this context about Merchant Category Codes, please review what a
business owner has written about their business and select the top 3 MCCs that you
feel best categorize this business. Provide a detailed reason and breakdown of your logical thinking
behind each category selection and rate the confidence level from 1 to 10, where 1 is a low confidence category
selection and 10 is a high confidence category selection. Sort the output so the
highest confidence MCC is shown first and the lowest confidence MCC is shown last.
Display your output as JSON using 'category', 'reason', 'code', and 'confidence_level'
as the keys for each item. Remember that your reason should be at least 2 sentences of your rationale behind
the category selection and should not just reiterate what the description was.`;

const LIMITED_MCC_MATCH = `
Business can be categoried into main categories and sub-categories. Here are the main categories and sub-categories 
we will use (and we will not use any other ones or make up new categories):

beauty_and_personal_care
- barber_shop
- blow_dry_bar
- body_grooming
- brows_lashes
- day_spa
- ear_body_piercing
- full_service_salon
- hair_removal_waxing
- hair_salon
- makeup_artistry
- massage_therapy
- med_spa
- nail_salon
- skin_care_esthetics
- tanning_salon
- tattoo
- other

charities_education_and_membership
- charitable_organization
- child_care
- instructor_teacher
- membership_organization
- political_organization
- religious_organization
- school
- tutor
- other

fitness
- barre
- boxing_gym
- cross_training_bootcamp
- crossfit_gym
- dance_studio
- fitness_studio
- gym_health_club
- indoor_cycling_studio
- martial_arts
- meditation
- nutrition
- personal_training
- pilates_studio
- rock_climbing
- rowing
- sports_recreation
- stretching
- swimming_water_aerobics
- yoga_studio
- other

food_and_drink
- table_service_restaurant
- counter_service_restaurant
- bar_club_lounge
- bakery
- caterer
- coffee_shop_cafe
- coffee_tea_shop
- convenience_store
- food_truck_cart
- grocery_market
- outdoor_markets
- specialty_shop
- other

health_care
- acupuncture
- anesthesiology
- audiology
- cardiology
- chiropractor
- dentistry
- dermatology
- emergency_medicine
- family_medicine
- general_surgery
- geriatrics
- internal_medicine
- massage_physiotherapy 
- medical_genetics
- nephrology
- neurology
- nutrition_dietetics
- obstetrics_gynecology
- oncology
- ophthalmology
- optometry_eyewear
- orthodontics
- pathology
- pediatrics
- podiatry
- psychiatry
- psychotherapy
- radiology
- speech_therapy
- urology
- other

home_and_repair
- automotive_services
- carpet_cleaning
- cleaning
- clothing_and_shoe_repair_alterations
- computer_electronics_and_appliance_repair
- dry_cleaning_and_laundry
- electrical_services
- flooring
- general_contracting
- heating_and_air_conditioning
- installation_services
- junk_removal
- landscaping
- locksmith_services
- moving
- painting
- pest_control
- plumbing
- roofing
- watch_jewelry_repair
- other

leisure_and_entertainment
- events_festivals
- movies_film
- museum_cultural
- music
- performing_arts
- sporting_events
- sports_recreation
- tourism
- other

pet_care
- other
- pet_boarding_daycare
- pet_grooming
- pet_sitting
- pet_training
- pet_walking
- veterinary_services

professional_services
- accounting
- child_care
- consulting
- delivery
- design
- interior_design
- legal_services
- marketing_advertising
- nanny_services
- notary_services
- photography
- printing_services
- real_estate
- software_development
- other

retail
- art_photo_and_film
- books_mags_music_and_video
- clothing_and_accessories
- convenience_store
- electronics
- eyewear
- flowers_and_gifts
- furniture_home_goods
- grocery_market
- hardware_store
- hobby_shop
- jewelry_and_watches
- office_supply
- outdoor_markets
- pet_store
- specialty_shop
- sporting_goods
- tobacco_ecigs_vape
- other

transportation
- bus
- delivery
- limousine
- moving
- private_shuttle
- taxi
- town_car
- other

Now that you have this context about business categories and sub-categories, please review what a 
business owner has written about their business and select the top 3 sub-categories and the parent 
category for each one that you feel best categorizes this business. Provide a detailed reason 
for each category selection and rate the confidence level from 1 to 10, where 1 is a low confidence category
selection and 10 is a high confidence category selection. Sort the output so the
highest confidence category selection is shown first and the lowest confidence category selection is shown last.
Display your output as JSON using 'category', 'subcategory', 'reason', and 'confidence_level'
as the keys for each item.`;

$(function() {

    $('#description').focus();

    $(document).on('click', '.segmented a.extended', function() {
        $('.segmented .limited').removeClass('selected');
        $(this).addClass('selected');

        $('.mcc-output').show();
        $('.mcc-limited-output').hide();

        return false;
    });

    $(document).on('click', '.segmented a.limited', function() {
        $('.segmented .extended').removeClass('selected');
        $(this).addClass('selected');

        $('.mcc-output').hide();
        $('.mcc-limited-output').show();

        return false;
    });

    $(document).on('click', 'button.generate-descriptions', function() {
        var $button = $(this),
            onlineStore = $('#online-store').val(),
            pointOfSale = $('#point-of-sale').val(),
            invoices = $('#invoices').val(),
            virtualTerminal = $('#virtual-terminal').val(),
            foodAndBev = $('#food-and-bev').val(),
            retail = $('#food-and-bev').val(),
            marketing = $('#marketing').val(),
            loyalty = $('#loyalty').val(),
            $pwOutput = $('.pw-output');

        // Hide DIVs, show spinner
        $('#spinner2').show();
        $pwOutput.hide();

        var prompt = PW_OUTPUT;

        if (onlineStore > 0 && onlineStore < 25) { prompt += " some browsing of Square Online Store,"; }
        if (onlineStore >= 25 && onlineStore < 50) { prompt += " a good amount of browsing of Square Online Store,"; }
        if (onlineStore >= 50 && onlineStore < 75) { prompt += " a lot of browsing of Square Online Store,"; }
        if (onlineStore >= 75) { prompt += " a lot of frequent and return browsing of Square Online Store,"; }

        if (pointOfSale > 0 && pointOfSale < 25) { prompt += " some browsing of Square Point of Sale,"; }
        if (pointOfSale >= 25 && pointOfSale < 50) { prompt += " a good amount of browsing of Square Point of Sale,"; }
        if (pointOfSale >= 50 && pointOfSale < 75) { prompt += " a lot of browsing of Square Point of Sale,"; }
        if (pointOfSale >= 75) { prompt += " a lot of frequent and return browsing of Square Point of Sale,"; }

        if (invoices > 0 && invoices < 25) { prompt += " some browsing of Square Invoices,"; }
        if (invoices >= 25 && invoices < 50) { prompt += " a good amount of browsing of Square Invoices,"; }
        if (invoices >= 50 && invoices < 75) { prompt += " a lot of browsing of Square Invoices,"; }
        if (invoices >= 75) { prompt += " a lot of frequent and return browsing of Square Invoices,"; }

        if (marketing > 0 && marketing < 25) { prompt += " some browsing of Square Marketing,"; }
        if (marketing >= 25 && marketing < 50) { prompt += " a good amount of browsing of Square Marketing,"; }
        if (marketing >= 50 && marketing < 75) { prompt += " a lot of browsing of Square Marketing,"; }
        if (marketing >= 75) { prompt += " a lot of frequent and return browsing of Square Marketing,"; }

        if (loyalty > 0 && loyalty < 25) { prompt += " some browsing of Square Loyalty programs,"; }
        if (loyalty >= 25 && loyalty < 50) { prompt += " a good amount of browsing of Square Loyalty programs,"; }
        if (loyalty >= 50 && loyalty < 75) { prompt += " a lot of browsing of Square Loyalty programs and am highly interested in them,"; }
        if (loyalty >= 75) { prompt += " a lot of frequent and return browsing of Square Loyalty programs and am highly interested in them,"; }

        if (virtualTerminal > 0 && virtualTerminal < 25) { prompt += " some browsing of Square Virtual Terminal,"; }
        if (virtualTerminal >= 25 && virtualTerminal < 50) { prompt += " a good amount of browsing of Square Virtual Terminal,"; }
        if (virtualTerminal >= 50 && virtualTerminal < 75) { prompt += " a lot of browsing of Square Virtual Terminal,"; }
        if (virtualTerminal >= 75) { prompt += " a lot of frequent and return browsing of Square Virtual Terminal,"; }

        if (foodAndBev > 0 && foodAndBev < 25) { prompt += " some browsing of Square products for Food & Beverage businesses,"; }
        if (foodAndBev >= 25 && foodAndBev < 50) { prompt += " a good amount of browsing of Square products for Food & Beverage businesses,"; }
        if (foodAndBev >= 50 && foodAndBev < 75) { prompt += " a lot of browsing of Square products for Food & Beverage businesses,"; }
        if (foodAndBev >= 75) { prompt += " a lot of frequent and return browsing of Square products for Food & Beverage businesses,"; }

        if (retail > 0 && retail < 25) { prompt += " some browsing of Square products for Retail businesses,"; }
        if (retail >= 25 && retail < 50) { prompt += " a good amount of browsing of Square products for Retail businesses,"; }
        if (retail >= 50 && retail < 75) { prompt += " a lot of browsing of Square products for Retail businesses,"; }
        if (retail >= 75) { prompt += " a lot of frequent and return browsing of Square products for Retail businesses,"; }

        prompt += PW_OUTPUT_FINISH;

        async function fetchDescriptions() {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + OPENAI_API_KEY
                    },
                    body: JSON.stringify({
                        "model": "gpt-3.5-turbo",
                        "messages": [{'role':'user', 'content':prompt}],
                        "temperature": 0.7
                    })
                });

                if (!response.ok) {
                    console.error("HTTP ERROR: " + response.status + "\n" + response.statusText);
                    alert('error');
                } else {
                    const data = await response.json();

                    console.log(data);
                    // alert(data);
                    // alert(data.choices[0].message.content);
                    // console.log(data.choices[0].message.content);

                    // const choices = JSON.parse(data.choices[0].message.content);

                    var pwOutputHTML = data.choices[0].message.content;


                    $pwOutput.html(pwOutputHTML);
                    $pwOutput.show();

                    // Hide/show
                    $('#spinner2').hide();
                    // $mccOutput.show();
                    // $limitedOutput.hide();

                }
            } catch (error) {
                console.error("ERROR: " + error);
            }
        }

        fetchDescriptions();

    });

    $(document).on('click', 'button.identify-category', function() {
        var $button = $(this),
            $description = $('textarea#description'),
            $mccOutput = $('.mcc-output'), /* Full set of MCCs */
            $limitedOutput = $('.mcc-limited-output'), /* Only current MCCs */
            $mccOutputUL = $mccOutput.find('ul'),
            $limitedOutputUL = $limitedOutput.find('ul'),
            description = $description.val();

        if (description == "") { alert("No description provided"); return; }

        // Hide DIVs, show spinner
        $('#spinner').show();
        $('.segmented').hide();
        $mccOutput.hide();
        $limitedOutput.hide();

        var extendedMCCMatchContent = EXTENDED_MCC_MATCH;
        extendedMCCMatchContent += "\nBusiness owner description: " + description + "\n\n";
        extendedMCCMatchContent += "Remember to only respond with JSON output only using the keys I provided.\n";
        extendedMCCMatchContent += "Finish this output with your JSON: var values =";

        var limitedMCCMatchContent = LIMITED_MCC_MATCH;
        limitedMCCMatchContent += "\nBusiness owner description: " + description + "\n\n";
        limitedMCCMatchContent += "Remember to only respond with JSON output only using the keys I provided.\n";
        limitedMCCMatchContent += "Finish this output with your JSON: var values =";

        async function fetchResponse() {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + OPENAI_API_KEY
                    },
                    body: JSON.stringify({
                        "model": "gpt-3.5-turbo",
                        "messages": [{'role':'user', 'content':extendedMCCMatchContent}],
                        "temperature": 0.7
                    })
                });

                if (!response.ok) {
                    console.error("HTTP ERROR: " + response.status + "\n" + response.statusText);
                    alert('error');
                } else {
                    const data = await response.json();
                    const choices = JSON.parse(data.choices[0].message.content);

                    var newExtendedOutputHTML = "<ul>";

                    choices.forEach((choice) => {
                        const category = choice.category;
                        const reason = choice.reason;
                        const code = choice.code;
                        const confidenceLevel = choice.confidence_level;

                        newExtendedOutputHTML += "<li>";
                        newExtendedOutputHTML += "<h5>" + category + "</h5>";
                        newExtendedOutputHTML += "<code>" + code + "</code>";
                        newExtendedOutputHTML += "<p class='rationale'>" + reason + "</p>";
                        newExtendedOutputHTML += "<h6 class='confidence'>Confidence: <span><strong>" + confidenceLevel + "</strong>/10</span></h6>";
                        newExtendedOutputHTML += "</li>";

                        // Do something with the values
                        console.log('Category:', category);
                        console.log('Rationale:', reason);
                        console.log('Code:', code);
                        console.log('Confidence Level:', confidenceLevel);
                    });

                    newExtendedOutputHTML += "</ul>";

                    $mccOutput.html(newExtendedOutputHTML);

                    // Hide/show
                    $('#spinner').hide();
                    $('.segmented').hide();
                    $mccOutput.show();
                    // $limitedOutput.hide();

                }
            } catch (error) {
                console.error("ERROR: " + error);
            }
        }

        async function fetchLimitedResponse() {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + OPENAI_API_KEY
                    },
                    body: JSON.stringify({
                        "model": "gpt-3.5-turbo",
                        "messages": [{'role':'user', 'content':limitedMCCMatchContent}],
                        "temperature": 0.7
                    })
                });

                if (!response.ok) {
                    console.error("HTTP ERROR: " + response.status + "\n" + response.statusText);
                    alert('error');
                } else {
                    const data = await response.json();

                    // alert(JSON.stringify(data));
                    // console.log(data);
                    // console.log(JSON.stringify(data));                    

                    console.log(data);

                    const choices = JSON.parse(data.choices[0].message.content);

                    // alert(JSON.stringify(choices));
                    // console.log(choices);
                    // console.log(JSON.stringify(choices));

                    var newLimitedOutputHTML = "<ul>";

                    choices.forEach((choice) => {
                        const category = choice.category;
                        const reason = choice.reason;
                        const subCategory = choice.subcategory;
                        const confidenceLevel = choice.confidence_level;

                        newLimitedOutputHTML += "<li>";
                        newLimitedOutputHTML += "<h5>" + category + "</h5>";
                        newLimitedOutputHTML += "<code>" + subCategory + "</code>";
                        newLimitedOutputHTML += "<p class='rationale'>" + reason + "</p>";
                        newLimitedOutputHTML += "<h6 class='confidence'>Confidence: <span>" + confidenceLevel + "</span></h6>";
                        newLimitedOutputHTML += "</li>";

                        // Do something with the values
                        console.log('Category:', category);
                        console.log('Sub-category:', subCategory);
                        console.log('Rationale:', reason);                        
                        console.log('Confidence Level:', confidenceLevel);
                    });

                    newLimitedOutputHTML += "</ul>";

                    $limitedOutput.html(newLimitedOutputHTML);

                }
            } catch (error) {
                console.error("ERROR: " + error);
            }
        }

        fetchResponse();
        // fetchLimitedResponse();


        // }

        /*

        <li>
            <h5>Medical Services and Health Practitioners</h5>
            <code>MCC 8099</code>
            <h6 class="confidence">90%</h6>
            <p class="rationale">
                The business owner is a licensed physical therapist providing services to clients.
                This falls under health practitioners providing medical services.
            </p>
        </li>

        */


        return false;
    });

    $(document).on('click', 'button.examples', function() {
        var $button = $(this),
            $form = $('#sliders');
            

        // Iterate across each input in sliders
        // If value is 0 keep going
        // If value is higher than 0 find the name of the page (the label)
        // Generate a string to describe how frequently they've been on that page based on slider value
        // Madlibs that into a prompt

        /*

        <li>
            <p class="pw-example">
                I'm starting a new fitness studio and need a reliable and easy-to-use payment solution. I want to use
                Square to accept payments at my location and also send invoices for our special fitness programs.
            </p>
        </li>

        */


        return false;
    });



});