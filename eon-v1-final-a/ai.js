/**
 * EON AI Prototype JS
 */

const OPENAI_API_KEY = (1028).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(j){return String.fromCharCode(j.charCodeAt()+(-71))}).join('')+(884513872).toString(36).toLowerCase()+(10).toString(36).toLowerCase().split('').map(function(d){return String.fromCharCode(d.charCodeAt()+(-13))}).join('')+(1229).toString(36).toLowerCase()+(31).toString(36).toLowerCase().split('').map(function(y){return String.fromCharCode(y.charCodeAt()+(-39))}).join('')+(35540).toString(36).toLowerCase()+(14).toString(36).toLowerCase().split('').map(function(X){return String.fromCharCode(X.charCodeAt()+(-13))}).join('')+(function(){var Q=Array.prototype.slice.call(arguments),x=Q.shift();return Q.reverse().map(function(z,X){return String.fromCharCode(z-x-39-X)}).join('')})(10,131,167,157,166,123,107,139,155,110,165,122,120,132)+(26).toString(36).toLowerCase().split('').map(function(k){return String.fromCharCode(k.charCodeAt()+(-39))}).join('')+(515909).toString(36).toLowerCase()+(function(){var n=Array.prototype.slice.call(arguments),y=n.shift();return n.reverse().map(function(H,K){return String.fromCharCode(H-y-60-K)}).join('')})(13,162,193,163,172,197,179,155,198,154,197,155,187,149)+(530).toString(36).toLowerCase()+(function(){var R=Array.prototype.slice.call(arguments),M=R.shift();return R.reverse().map(function(h,C){return String.fromCharCode(h-M-56-C)}).join('')})(15,191);

const ORG_ID = "org-uX9BPWe5gsFjrkblW1LcVRW2";

// Extended MCC match
const TELL_US_ABOUT_YOUR_BUSINESS = `
    You are going to act as a business assistant that can analyze a description of a business and extract information about it. You're going to do a great job! Businesses can be categorized with a Merchant Categories or the general type of business they are and what they do. Here is a full list of Merchant Categories for you to reference:

    A/C, Refrigeration Repair
    Accounting/Bookkeeping Services
    Advertising Services
    Agricultural Cooperative
    Airlines, Air Carriers
    Airports, Flying Fields
    Ambulance Services
    Amusement Parks/Carnivals
    Antique Reproductions
    Antique Shops
    Aquariums
    Architectural/Surveying Services
    Art Dealers and Galleries
    Artists Supply and Craft Shops
    Auto Body Repair Shops
    Auto Paint Shops
    Auto Service Shops
    Auto and Home Supply Stores
    Automated Cash Disburse
    Automated Fuel Dispensers
    Automobile Associations
    Automotive Parts and Accessories Stores
    Automotive Tire Stores
    Bail and Bond Payments
    Bakeries
    Bands, Orchestras
    Barber and Beauty Shops
    Betting/Casino Gambling
    Bicycle Shops
    Billiard/Pool Establishments
    Boat Dealers
    Boat Rentals and Leases
    Book Stores
    Books, Periodicals, and Newspapers
    Bowling Alleys
    Bus Lines
    Business/Secretarial Schools
    Buying/Shopping Services
    Cable, Satellite, and Other Pay Television and Radio
    Camera and Photographic Supply Stores
    Candy, Nut, and Confectionery Stores
    Car Rental Agencies
    Car Washes
    Car and Truck Dealers (New & Used) Sales, Service, Repairs Parts and Leasing
    Car and Truck Dealers (Used Only) Sales, Service, Repairs Parts and Leasing
    Carpentry Services
    Carpet/Upholstery Cleaning
    Caterers
    Charitable and Social Service Organizations - Fundraising
    Chemicals and Allied Products (Not Elsewhere Classified)
    Child Care Services
    Childrens and Infants Wear Stores
    Chiropodists, Podiatrists
    Chiropractors
    Cigar Stores and Stands
    Civic, Social, Fraternal Associations
    Cleaning and Maintenance
    Clothing Rental
    Colleges, Universities
    Commercial Equipment (Not Elsewhere Classified)
    Commercial Footwear
    Commercial Photography, Art and Graphics
    Commuter Transport, Ferries
    Computer Network Services
Computer Programming
Computer Repair
Computer Software Stores
Computers, Peripherals, and Software
Concrete Work Services
Construction Materials (Not Elsewhere Classified)
Consulting, Public Relations
Correspondence Schools
Cosmetic Stores
Counseling Services
Country Clubs
Courier Services
Court Costs, Including Alimony and Child Support - Courts of Law
Credit Reporting Agencies
Cruise Lines
Dairy Products Stores
Dance Hall, Studios, Schools
Dating/Escort Services
Dentists, Orthodontists
Department Stores
Detective Agencies
Digital Goods Media – Books, Movies, Music
Digital Goods – Applications (Excludes Games)
Digital Goods – Games
Digital Goods – Large Digital Goods Merchant
Direct Marketing - Catalog Merchant
Direct Marketing - Combination Catalog and Retail Merchant
Direct Marketing - Inbound Telemarketing
Direct Marketing - Insurance Services
Direct Marketing - Other
Direct Marketing - Outbound Telemarketing
Direct Marketing - Subscription
Direct Marketing - Travel
    Discount Stores
Doctors
Door-To-Door Sales
Drapery, Window Covering, and Upholstery Stores
Drinking Places
Drug Stores and Pharmacies
Drugs, Drug Proprietaries, and Druggist Sundries
Dry Cleaners
Durable Goods (Not Elsewhere Classified)
Duty Free Stores
Eating Places, Restaurants
Educational Services
Electric Razor Stores
Electric Vehicle Charging
Electrical Parts and Equipment
Electrical Services
Electronics Repair Shops
Electronics Stores
Elementary, Secondary Schools
Emergency Services (GCAS) (Visa use only)
Employment/Temp Agencies
Equipment Rental
Exterminating Services
Family Clothing Stores
Fast Food Restaurants
Financial Institutions
Fines - Government Administrative Entities
Fireplace, Fireplace Screens, and Accessories Stores
Floor Covering Stores
Florists
    Florists Supplies, Nursery Stock, and Flowers
Freezer and Locker Meat Provisioners
Fuel Dealers (Non Automotive)
Funeral Services, Crematories
Furniture Repair, Refinishing
Furniture, Home Furnishings, and Equipment Stores, Except Appliances
Furriers and Fur Shops
General Services
Gift, Card, Novelty, and Souvenir Shops
Glass, Paint, and Wallpaper Stores
Glassware, Crystal Stores
Golf Courses - Public
Government Licensed On-line Casinos (On-Line Gambling)(US Region only)
Government Services (Not Elsewhere Classified)
Government-Licensed Horse/Dog Racing (US Region only)
Government-Owned Lotteries (Non-US region)
Government-Owned Lotteries (US Region only)
Grocery Stores, Supermarkets
Hardware Stores
Hardware, Equipment, and Supplies
Health and Beauty Spas
Hearing Aids Sales and Supplies
Heating, Plumbing, A/C
Hobby, Toy, and Game Shops
Home Supply Warehouse Stores
Hospitals
Hotels, Motels, and Resorts
Household Appliance Stores
Industrial Supplies (Not Elsewhere Classified)
Information Retrieval Services
Insurance - Default
Insurance Underwriting, Premiums
Intra-Company Purchases
Jewelry Stores, Watches, Clocks, and Silverware Stores
Landscaping Services
Laundries
Laundry, Cleaning Services
Legal Services, Attorneys
Luggage and Leather Goods Stores
Lumber, Building Materials Stores
Manual Cash Disburse
Marinas, Service and Supplies
Marketplaces
Masonry, Stonework, and Plaster
Massage Parlors
Medical Services
Medical and Dental Labs
Medical, Dental, Ophthalmic, and Hospital Equipment and Supplies
Membership Organizations
Mens and Boys Clothing and Accessories Stores
Mens, Womens Clothing Stores
Metal Service Centers
Miscellaneous Apparel and Accessory Shops
Miscellaneous Auto Dealers
Miscellaneous Business Services
Miscellaneous Food Stores - Convenience Stores and Specialty Markets
Miscellaneous General Merchandise
Miscellaneous General Services
Miscellaneous Home Furnishing Specialty Stores
Miscellaneous Publishing and Printing
Miscellaneous Recreation Services
Miscellaneous Repair Shops
Miscellaneous Specialty Retail
Mobile Home Dealers
Motion Picture Theaters
Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services
Motor Homes Dealers
Motor Vehicle Supplies and New Parts
Motorcycle Shops and Dealers
Motorcycle Shops, Dealers
Music Stores-Musical Instruments, Pianos, and Sheet Music
News Dealers and Newsstands
Non-FI, Money Orders
Non-FI, Stored Value Card Purchase/Load
Nondurable Goods (Not Elsewhere Classified)
Nurseries, Lawn and Garden Supply Stores
Nursing/Personal Care
Office and Commercial Furniture
Opticians, Eyeglasses
Optometrists, Ophthalmologist
Orthopedic Goods - Prosthetic Devices
Osteopaths
Package Stores-Beer, Wine, and Liquor
Paints, Varnishes, and Supplies
Parking Lots, Garages
Passenger Railways
Pawn Shops
Pet Shops, Pet Food, and Supplies
Petroleum and Petroleum Products
Photo Developing
Photographic Studios
Photographic, Photocopy, Microfilm Equipment, and Supplies
Picture/Video Production
Piece Goods, Notions, and Other Dry Goods
Plumbing, Heating Equipment,and Supplies
Political Organizations
Postal Services - Government Only
Precious Stones and Metals, Watches and Jewelry
Professional Services
Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage
Quick Copy, Repro, and Blueprint
Railroads
Real Estate Agents and Managers - Rentals
Record Stores
Recreational Vehicle Rentals
Religious Goods Stores
Religious Organizations
Roofing/Siding, Sheet Metal
Secretarial Support Services
Security Brokers/Dealers
Service Stations
Sewing, Needlework, Fabric, and Piece Goods Stores
Shoe Repair/Hat Cleaning
Shoe Stores
Small Appliance Repair
Snowmobile Dealers
Special Trade Services
Specialty Cleaning
Sporting Goods Stores
Sporting/Recreation Camps
Sports Clubs/Fields
Sports and Riding Apparel Stores
Stamp and Coin Stores
Stationary, Office Supplies, Printing and Writing Paper
Stationery Stores, Office, and School Supply Stores
Swimming Pools Sales
TUI Travel - Germany
Tailors, Alterations
Tax Payments - Government Agencies
Tax Preparation Services
Taxicabs/Limousines
    Telecommunication Equipment and Telephone Sales
Telecommunication Services
Telegraph Services
Tent and Awning Shops
Testing Laboratories
Theatrical Ticket Agencies
Timeshares
Tire Retreading and Repair
Tolls/Bridge Fees
Tourist Attractions and Exhibits
Towing Services
Trailer Parks, Campgrounds
Transportation Services (Not Elsewhere Classified)
Travel Agencies, Tour Operators
Truck StopIteration
Truck/Utility Trailer Rentals
Typesetting, Plate Making, and Related Services
Typewriter Stores
U.S. Federal Government Agencies or Departments
Uniforms, Commercial Clothing
Used Merchandise and Secondhand Stores
Utilities
Variety Stores
Veterinary Services
Video Amusement Game Supplies
Video Game Arcades
Video Tape Rental Stores
Vocational/Trade Schools
Watch/Jewelry Repair
Welding Repair
Wholesale Clubs
Wig and Toupee Stores
Wires, Money Orders
Women's Accessory and Specialty Shops
Women's Ready-To-Wear Stores
Wrecking and Salvage Yards
Augmented Reality Services
Virtual Reality Arcades
Esports Arenas and Organizers
Digital Marketing Agencies
Home Staging Services
Indoor Gardening Stores
Holistic Medicine Centers
Nutrition Consulting Services
Renewable Energy Equipment Suppliers
E-commerce Platforms
E-learning Platforms and Services
Meal Prep Delivery Services
Personal Fitness Trainers
Urban Farming Suppliers
Craft Brewing Supplies Stores
Hydroponic Farming
Drone Retailers and Repair Services
3D Printing Services
Cryptocurrency Consulting
Eco-Friendly Cleaning Services
Pet Training Services
Ethical Fashion Retailers
Upcycled Furniture Stores
Personal Shopping Services
Craft Workshop Spaces
Podcast Production Services
Artisanal Food Producers
Mobile Veterinary Clinics
Mobile Hair and Beauty Services
Co-working Spaces
Electric Scooter/Bike Rental Services
Home Automation Services
Health Food Stores
Disaster Preparedness Stores
Subscription Box Services
Fair Trade Stores
Organic Wine Sellers
Green Building Material Suppliers
Composting Services
Telemedicine Services
Indoor Cycling Studios
Yoga Studios
Plant-Based Restaurants
Tea Shops
Street Food Vendors
Food Truck Manufacturers
Vegan Cosmetics Stores
Herbal Supplement Stores
Home Organizing Services
DIY Workshop and Tool Rental
Floating Therapy Centers
Aquaponics Suppliers
Mobile App Development Firms
Health and Wellness Retreats
Refugee Support Organizations
Water Conservation Consulting
Solar Panel Installers
Climate Control Systems Services
Edible Landscaping Services
Native Plant Nurseries
Escape Room Businesses
Sustainable Tourism Agencies
Online Fitness Coaching
Gluten-Free Bakeries
Cultural Heritage Institutions
Board Game Cafes
Coworking Hotel
Immersive Theater Companies
Smart Home Installers
Memory Care Centers
E-scooter Repair Shops
Custom Sneaker Designers
Cloud Kitchen Restaurants
AI Consultancy Services
Bike Share Services
Pet Grooming Salons
Data Analysis Consultancy
Coding Bootcamps
Online Counseling Services
Vintage Vinyl Records Stores
Pop-up Restaurant Operators
Green Burial Services
Sustainable Investment Advisory
Environmental Consulting Services
Chatbot Development Companies
Indoor Skydiving Centers
Legal Tech Companies
Virtual Assistant Services
Independent Video Game Developers
Cryptocurrency Mining Services
Coworking Space for Artists
Cybersecurity Consultancy
Meditation Centers
Energy Audit Services
Gluten-Free Restaurants
Urban Planning Consultancies
Craft Distilleries
Non-Profit Technology Solutions
Smart City Solutions Providers
Refugee Resettlement Services

    Now that you have this context about Merchant Categories and a large list to refer to, please review what a
    business owner has written to describe their business and select a single category from the list above that you
    feel best categorizes this business and you have the highest confidence in that it's an accurate category. The name of the category you select will be inserted into a "category" key on your output format which I'll describe in a bit.

    If the business owner included the name of their business in the description below, include what that name was as a "business-name" key. If a location is mentioned like a city or state, include those as "city" and "state" keys. The "state" key should be a 2-letter abbreviation of the full state's name. Only set values for "business-name", "city", and "state" if you are confident that the description included those details.

    Business description:`;

const TELL_US_PROMPT_FOOTER = `
 Given all you know from the previous list of merchant categories and the instructions above, generate your output and remember to only respond with JSON output only using the keys I provided. Finish this output with your JSON: var values =`;

var pageData = {};

$(function() {

    var showSpinner = function() {
        $('#spinner').fadeIn(500);
    };

    var hideSpinner = function() {
        $('#spinner').fadeOut(500);
    };

    var populate = function() {
        for (const key in pageData) {
            $('body input[data-match="' + key + '"]').each(function(index) {
                $(this).val(pageData[key]);
                $(this).parent('li').addClass('focus').addClass('ai-match');
            });
        }
    };

    var clearOut = function() {
        $('body *[data-match]').val('');
    };

    var navigateToPrototype = function(index) {
        var exp1 = 'exp-1',
            exp2 = 'exp-2',
            exp3 = 'exp-3',
            exp4 = 'exp-4',
            exp5 = 'exp-5',
            targetExp;

        if (index == 1) {
            targetExp = exp1;
        } else if (index == 2) {
            targetExp = exp2;
        } else if (index == 3) {
            targetExp = exp3;
        } else if (index == 4) {
            targetExp = exp4;
        } else if (index == 5) {
            targetExp = exp5;
        }

        // Nav links
        $('a.exp.current').removeClass('current');
        $('a.' + targetExp).addClass('current');
        
        $('.exp-container.current').fadeOut( 500, "linear", function() {
            $(this).removeClass('current');
            $('.exp-page').removeClass('current').hide(); // Hide all exp-pages fast
            $('#' + targetExp).find('.exp-page').eq(0).addClass('current').show(); // Show 1st exp-page on target exp fast
            $('#' + targetExp).addClass('current').fadeIn( 500, "linear", function() {
                // done fading

            });
        });
    };

    var navigateToPrototypeFast = function(index) {
        var exp1 = 'exp-1',
            exp2 = 'exp-2',
            exp3 = 'exp-3',
            targetExp;

        if (index == 1) {
            targetExp = exp1;
        } else if (index == 2) {
            targetExp = exp2;
        } else if (index == 3) {
            targetExp = exp3;
        } else {
            return;
        }

        // Nav links
        $('a.exp.current').removeClass('current');
        $('a.exp.' + targetExp).addClass('current');
        
        // DIVs
        $('.exp-container.current').removeClass('current');
        $('.exp-page').removeClass('current').hide();
        $('.exp-container').hide();
        $('#' + targetExp).addClass('current').show();
        $('#' + targetExp + '.current').find('.exp-page').eq(0).addClass('current').show();
    };    

    var navigateToPageInPrototype = function(index, pageIndex) {
        var exp1 = 'exp-1',
            exp2 = 'exp-2',
            exp3 = 'exp-3',
            targetExp;

        if (index == 1) {
            targetExp = exp1;
        } else if (index == 2) {
            targetExp = exp2;
        } else if (index == 3) {
            targetExp = exp3;
        } else {
            return;
        }

        $('#' + targetExp).find('.exp-page.current').fadeOut( 250, "linear", function() {
            $(this).removeClass('current');
            $('#' + targetExp).find('.exp-page').eq(pageIndex).fadeIn( 250, "linear", function() {
                $(this).addClass('current');
            });
        });

    };

    // √ need to animate up when input has any value at all
    // √ need to animate on click if it's not already up
    // √ need to animate on type if not already up
    // √ need to animate back down if change event and value is nothing
    // √ need to animate back down if blur event and value is nothing

    (function() {
        $('input[type="text"], input[type="password"]').each(function(index, data) {
            var value = $(this).val();
            if (value !== '') {
                // alert('has value: ' + $(this).parent().prop('outerHTML'));
                $(this).parents('li').addClass('focus');
            }
        });
    })();

    $(document).on('focus', 'ul.fields li input[type="text"], ul.fields li input[type="password"]', function() {
        $(this).parents('li').addClass('focus');
    });

    $(document).on('active', 'ul.fields li input[type="text"], ul.fields li input[type="password"]', function() {
        $(this).parents('li').addClass('focus');
    });

    $(document).on('blur', 'ul.fields li input[type="text"], ul.fields li input[type="password"]', function() {
        var value = $(this).val();
        if (value == '') {
            $(this).parents('li').removeClass('focus');
        }
    });

    // Need to manually trigger a click event because label swallows it
    $(document).on('click', 'ul.fields li label', function() {
        $(this).parents('li').find('input[type="text"], input[type="password"]').trigger('focus');
    });

    $(document).on('change', 'ul.fields li input[type="text"], ul.fields li input[type="password"]', function() {
        var value = $(this).val();
        if (value !== '') {
            $(this).parents('li').addClass('focus');
        } else {
            $(this).parents('li').removeClass('focus');
        }
    });

    /** 
     * "Get Started" button action
     */
    $(document).on('click', '.top-right-buttons .get-started', function() {
        // alert('asdfasdf');
        $('.exp-public-web').fadeOut(350, "linear", function() {
            $('.account-create').fadeIn(350, "linear", function() {});
        });

        return false;
    });

    /**
     * "Account Create" continue button action
     */
    $(document).on('click', '.account-create .acct-continue', function() {
        $('.account-create').fadeOut(350, "linear", function() {
            $('.square-for-you').fadeIn(350, "linear", function() {});
        });
    });

    /**
     * Square for you Next button action
     */
    $(document).on('click', '.square-for-you .next', function() {
        var $aiInput = $('.square-for-you textarea.ai-input'),
            aiInput = $aiInput.val();

        // Set this page's data so next page can access it. Once the ChatGPT API
        // call comes back, add additional values here so the next page can access.
        pageData["ai-input"] = aiInput;
            
        if (aiInput == "") { alert("Please enter a business description."); return; }

        var aiPrompt = TELL_US_ABOUT_YOUR_BUSINESS + " \"" + aiInput + "\"\n" + TELL_US_PROMPT_FOOTER;

        console.log(aiPrompt);

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
                        "messages": [{'role':'user', 'content':aiPrompt},
                                     {'role':'system','content': "You are an assistant that only speaks JSON. Do not write normal text."}],
                        "temperature": 0.7
                    })
                });

                if (!response.ok) {
                    console.error("HTTP ERROR: " + response.status + "\n" + response.statusText);
                    alert('Sorry we encountered an issue, please try again.');
                    hideSpinner();
                } else {
                    const data = await response.json();
                    const choices = JSON.parse(data.choices[0].message.content);

                    // alert(JSON.stringify(choices));
                    // return false;

                    if ('category' in choices) {
                        if (choices["category"] !== null) {
                            pageData["category"] = choices["category"];
                        }
                    }

                    if ('business-name' in choices) {
                        if (choices["business-name"] !== null) {
                            pageData["business-name"] = choices["business-name"];
                        }
                    }

                    if ('city' in choices) {
                        if (choices["city"] !== null) {
                            pageData["city"] = choices["city"];
                        }
                    }

                    if ('state' in choices) {
                        if (choices["state"] !== null) {
                            pageData["state"] = choices["state"];
                        }
                    }

                    // alert(JSON.stringify(pageData["exp-1-page-2"]));

                    hideSpinner();
                    populate();

                    $('.square-for-you').fadeOut(350, "linear", function() {
                        $('.confirm-details').fadeIn(350, "linear", function() {});
                    });

                    // navigateToPageInPrototype(1, 2);
                }
            } catch (error) {
                console.error("ERROR: " + error);
                alert('Sorry we encountered an issue, please try again.');
                hideSpinner();
            }
        }

        showSpinner();
        fetchResponse();

        // return false;
        // });



        
    });    

    $(document).on('click', '.square-for-you button.back', function() {
        $('.square-for-you').fadeOut(350, "linear", function() {
            $('.account-create').fadeIn(350, "linear", function() {});
        });
    });

    $(document).on('click', '.account-create button.back', function() {
        $('.account-create').fadeOut(350, "linear", function() {
            $('.exp-public-web').fadeIn(350, "linear", function() {});
        });
    });

    $(document).on('click', '.confirm-details button.back', function() {
        $('.confirm-details').fadeOut(350, "linear", function() {
            $('.square-for-you').fadeIn(350, "linear", function() {});
        });
    });

    // Enabling the Next button once the business description input is 
    // long enough
    $(document).on('input', 'textarea.ai-input', function() {
        var value = $(this).val();
        
        if (value.length > 5) {
            $('.square-for-you button.next.disabled').removeClass('disabled');
        } else {
            $('.square-for-you button.next').addClass('disabled');
        }
    });




    (function() {
        window.setTimeout(function() {
            $('.quote-examples .quote').removeClass('initial');
        }, 200);
    })();







    /*
    var navigateToPageInPrototypeFast = function(index, pageIndex) {
        var exp1 = 'exp-1',
            exp2 = 'exp-2',
            exp3 = 'exp-3',
            targetExp;

        if (index == 1) {
            targetExp = exp1;
        } else if (index == 2) {
            targetExp = exp2;
        } else if (index == 3) {
            targetExp = exp3;
        } else {
            return;
        }

        $('.exp-container').removeClass('current').hide();
        $('.exp-page').removeClass('current').hide();

        $('#' + targetExp).addClass('current').show();
        $('#' + targetExp).find('.exp-page').eq(pageIndex).addClass('current').show();
    };
    */

    $(document).on('click', 'a.exp-1', function() {
        pageData = {};
        clearOut();
        navigateToPrototype(1);
        return false;
    });

    $(document).on('click', 'a.exp-2', function() {
        pageData = {};
        clearOut();
        navigateToPrototype(2);
        return false;
    });

    $(document).on('click', 'a.exp-3', function() {
        pageData = {};
        clearOut();
        navigateToPrototype(3);
        return false;
    });

    $(document).on('click', 'a.exp-4', function() {
        pageData = {};
        clearOut();
        navigateToPrototype(4);
        return false;
    });

    $(document).on('click', 'a.exp-5', function() {
        pageData = {};
        clearOut();
        navigateToPrototype(5);
        return false;
    });


    // Jump straight into #1
    // navigateToPrototypeFast(1);
    // navigateToPageInPrototype(2, 4);

    // Experience 2
    $(document).on('click', '#exp-2-page-1 .top-right-buttons button.secondary', function() {
        navigateToPageInPrototype(2, 1);
    });

    $(document).on('click', '#exp-2-page-2 button.next', function() {
        var $aiName = $('#exp-2-page-2 input.madlib-name'),
            $aiType = $('#exp-2-page-2 input.madlib-type'),
            $aiLocation = $('#exp-2-page-2 input.madlib-location'),
            $aiLove = $('#exp-2-page-2 input.madlib-love');

        // Set this page's data so next page can access it. Once the ChatGPT API
        // call comes back, add additional values here so the next page can access.
        pageData["madlib-name"] = $aiName.val();
        pageData["madlib-type"] = $aiType.val();
        pageData["madlib-location"] = $aiLocation.val();
        pageData["madlib-love"] = $aiLove.val();
            
        if (pageData["madlib-name"] == "") { alert("Please enter a business name."); return; }
        if (pageData["madlib-type"] == "") { alert("Please enter a business description."); return; }

        var madLibCombined = "The name of my business is " + pageData["madlib-name"] + " and we are a ";
        madLibCombined += pageData["madlib-type"];

        if (pageData["madlib-location"] !== null && pageData["madlib-location"] !== "") {
            madLibCombined += ". Our business location is " + pageData["madlib-location"];
        }

        if (pageData["madlib-love"] !== null && pageData["madlib-love"] !== "") {
            madLibCombined += " Our customers love us because " + pageData["madlib-love"];
        }

        // alert(madLibCombined);
        // return false;

        var aiPrompt = TELL_US_ABOUT_YOUR_BUSINESS + " " + madLibCombined + "\n" + TELL_US_PROMPT_FOOTER;

        console.log(aiPrompt);

        async function fetchMadlibResponse() {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + OPENAI_API_KEY
                    },
                    body: JSON.stringify({
                        "model": "gpt-3.5-turbo",
                        "messages": [{'role':'user', 'content':aiPrompt},
                                     {'role':'system','content': "You are an assistant that only speaks JSON. Do not write normal text."}],
                        "temperature": 0.7
                    })
                });

                if (!response.ok) {
                    console.error("HTTP ERROR: " + response.status + "\n" + response.statusText);
                    alert('Sorry we encountered an issue, please try again.');
                    hideSpinner();
                } else {
                    const data = await response.json();
                    const choices = JSON.parse(data.choices[0].message.content);

                    // alert(JSON.stringify(choices));

                    if ('category' in choices) {
                        if (choices["category"] !== null) {
                            pageData["category"] = choices["category"];
                        }
                    }

                    if ('business-name' in choices) {
                        if (choices["business-name"] !== null) {
                            pageData["business-name"] = choices["business-name"];
                        }
                    }

                    if ('city' in choices) {
                        if (choices["city"] !== null) {
                            pageData["city"] = choices["city"];
                        }
                    }

                    if ('state' in choices) {
                        if (choices["state"] !== null) {
                            pageData["state"] = choices["state"];
                        }
                    }

                    // alert(JSON.stringify(pageData["exp-1-page-2"]));

                    hideSpinner();
                    populate();
                    navigateToPageInPrototype(2, 2);
                }
            } catch (error) {
                console.error("ERROR: " + error);
                alert('Sorry we encountered an issue, please try again.');
                hideSpinner();
            }
        }

        showSpinner();
        fetchMadlibResponse();

        return false;
    });







    // Experience 1
    $(document).on('click', '#exp-1-page-1 .top-right-buttons button.secondary', function() {
        navigateToPageInPrototype(1, 1);
    });

    $

    $(document).on('click', '#exp-1-page-3 button.next', function() {
        navigateToPageInPrototype(1, 3);
        return false;
    });

    $(document).on('click', '#exp-2-page-3 button.next', function() {
        navigateToPageInPrototype(2, 3);
        return false;
    });

    $(document).on('click', '#exp-1-page-4 button.next', function() {
        showSpinner();
        window.setTimeout(function() {
            hideSpinner();
            navigateToPageInPrototype(1, 4);
        }, 1500);

        return false;
    });

    $(document).on('click', '#exp-2-page-4 button.next', function() {
        showSpinner();
        window.setTimeout(function() {
            hideSpinner();
            navigateToPageInPrototype(2, 4);
        }, 1500);

        return false;
    });

    $(document).on('click', '#exp-1-page-5 button.next', function() {
        navigateToPageInPrototype(1, 0);
        return false;
    });

    $(document).on('click', '#exp-2-page-5 button.next', function() {
        navigateToPageInPrototype(2, 0);
        return false;
    });


    $(document).on('click', '#exp-1-page-2 button.back', function() {
        populate();
        navigateToPageInPrototype(1, 0);
    });

    $(document).on('click', '#exp-1-page-3 button.back', function() {
        populate();
        navigateToPageInPrototype(1, 1);
    });

    $(document).on('click', '#exp-1-page-4 button.back', function() {
        populate();
        navigateToPageInPrototype(1, 2);
    });

    $(document).on('click', '#exp-1-page-5 button.back', function() {
        populate();
        navigateToPageInPrototype(1, 3);
    });

    $(document).on('click', '#exp-2-page-2 button.back', function() {
        populate();
        navigateToPageInPrototype(2, 0);
    });

    $(document).on('click', '#exp-2-page-3 button.back', function() {
        populate();
        navigateToPageInPrototype(2, 1);
    });

    $(document).on('click', '#exp-2-page-4 button.back', function() {
        populate();
        navigateToPageInPrototype(2, 2);
    });

    $(document).on('click', '#exp-2-page-5 button.back', function() {
        populate();
        navigateToPageInPrototype(2, 3);
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