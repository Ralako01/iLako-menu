// ============== CONFIGURATION ==============
        const menuData = {
            restaurantName: "iLako Resto",
            logoPath: "logo.png",
            currency: "Ar",
            categories: [
                { id: 'entrees', colorClass: 'category-entrees', imageUrl: './salade.png', items: [ { id: 'veloute_de_potiron', price: 22000 }, { id: 'potage_de_carotte', price: 22000 }, { id: 'creme_de_tarot', price: 22000 }, { id: 'nems_salade', price: 22000 }, { id: 'salade_chevre', price: 25000 }, { id: 'crabe_farci', price: 26000 }, { id: 'calamars_croustillants', price: 25000 }, { id: 'croquette_de_camembert', price: 26000 }, { id: 'taboule', price: 18000 }, { id: 'salade_cesar', price: 22000 } ] },
                { id: 'plats', colorClass: 'category-plats', imageUrl: './plats.png', items: [ { id: 'porc_grillee', price: 30000 }, { id: 'porc_moutarde', price: 28000 }, { id: 'escalope_milanaise', price: 32000 }, { id: 'brochettes_de_poulet', price: 30000 }, { id: 'emince_poulet_tikka', price: 30000 }, { id: 'emince_poulet_champignons', price: 32000 }, { id: 'roule_de_volaille', price: 32000 }, { id: 'cuisse_de_canard', price: 36000 }, { id: 'magret_de_canard', price: 42000 }, { id: 'magret_de_canard_farci', price: 32000 }, { id: 'cocotte_d_agneau', price: 32000 } ], addOns: { id: 'accompagnements', items: [ { id: 'riz_blanc', price: 7000 }, { id: 'legumes_sautes', price: 7000 }, { id: 'pomme_sautee', price: 7000 }, { id: 'spaghetti', price: 7000 } ] } },
                { id: 'plats_malagasy', colorClass: 'category-plats-malagasy', imageUrl: './malagasy.png', items: [ { id: 'tilapia_endasina', price: 28000 }, { id: 'akoho_gasy', price: 25000 }, { id: 'romazava_royale', price: 29000 }, { id: 'henomby_ritra', price: 27000 } ] },
                { id: 'desserts', colorClass: 'category-desserts', imageUrl: './desserts.png', items: [ { id: 'assiette_fruits', price: 15000 }, { id: 'affogato', price: 14000 }, { id: 'fruits_flambes', price: 16000 }, { id: 'choux_craquelin', price: 15000 }, { id: 'panna_cotta', price: 15000 }, { id: 'fondant_chocolat', price: 17000 }, { id: 'coupe_glacee_caramel', price: 15000 }, { id: 'coupe_glacee_fruits', price: 16000 }, { id: 'nougat_glace', price: 15000 }, { id: 'coupe_glace', price: 15000 } ] }
            ]
        };

        const drinksData = {
            categories: [
                { id: 'aperos', colorClass: 'category-aperos', imageUrl: './apéro.png', items: [{ id: 'pastis', price: 15000 }, { id: 'ricard', price: 26000 }, { id: 'tomate_perroquet_mauresque', price: 14000 }, { id: 'martini_blanc_rouge', price: 20000 }, { id: 'kir_vin_blanc', price: 16000 }] },
                { id: 'cocktails', colorClass: 'category-cocktails', imageUrl: './cocktails.png', items: [{ id: 'san_francisco', price: 19000 }, { id: 'long_island', price: 23000 }, { id: 'bora_bora', price: 15000 }, { id: 'tom_collins', price: 22000 }, { id: 'mojito', price: 16000 }] },
                { id: 'rhum', colorClass: 'category-rhum', imageUrl: './rhum.png', items: [{ id: 'gin_harpoon', price: 15000 }, { id: 'gin_import', price: 26000 }, { id: 'vodka_absolut', price: 25000 }, { id: 'vodka_smirnoff', price: 18000 }, { id: 'rhum_cuvee', price: 21000 }] },
                { id: 'bieres', colorClass: 'category-bieres', imageUrl: './biere.png', items: [{ id: 'thb_gm', price: 12000 }, { id: 'thb_pm', price: 9000 }, { id: 'fresh', price: 10000 }, { id: 'gold_8', price: 10000 }, { id: 'gold_blonde', price: 12000 }] },
                { id: 'eaux', colorClass: 'category-eaux', imageUrl: './eau.png', items: [{ id: 'eau_minerale_gm', price: 8000 }, { id: 'eau_minerale_pm', price: 5000 }, { id: 'cristal', price: 8000 }, { id: 'ranovisy', price: 8000 }] },
                { id: 'boissons_chaudes', colorClass: 'category-boissons_chaudes', imageUrl: './cafe.png', items: [{ id: 'lait_chaud', price: 7000 }, { id: 'the', price: 6000 }, { id: 'chocolat_chaud', price: 7000 }, { id: 'cafe', price: 8000 }, { id: 'cafe_au_lait', price: 7000 }] },
                { id: 'softs', colorClass: 'category-softs', imageUrl: './softs.png', items: [{ id: 'soft_gm', price: 14000 }, { id: 'soft_pm', price: 7000 }, { id: 'diabolo', price: 8000 }, { id: 'sirop_eau_vive', price: 7500 }, { id: 'jus_de_fruit', price: 8000 }] },
                { id: 'whisky', colorClass: 'category-whisky', imageUrl: './whisky.png', items: [{ id: 'jb', price: 24000 }, { id: 'ballantines', price: 24000 }, { id: 'johnnie_walker_red', price: 24000 }, { id: 'johnnie_walker_black', price: 35000 }, { id: 'johnnie_walker_double_black', price: 40000 }] }
            ]
        };

        const translations = {
            fr: {
                restaurantSlogan: "Composez votre menu idéal", cartTitle: 'Votre Commande', cartPlaceholder: 'Sélectionnez vos plats pour commencer', totalText: 'Total :', orderBtn: 'Passer la commande', clearCartBtn: 'Vider le panier', tableLabel: 'Numéro de table', modalTitleSummary: 'Résumé de votre commande', modalMessageSummary: 'Vérifiez votre commande et votre numéro de table avant de la finaliser.', modalEditBtn: 'Modifier', modalConfirmBtn: 'Confirmer la commande', modalTitleConfirmed: 'Commande Confirmée !', modalMessageConfirmed: 'QR code à scanner par le serveur pour valider la commande.', modalCloseBtn: 'Fermer', alertMsg: 'Veuillez choisir votre Table' , tabMenu: "Menu", tabDrinks: "Boissons" , socialFollow: "📢 Suivez-nous et donnez votre avis :", reviewUs: "⭐ Notez-nous",
                categories: {
                    entrees: { name: '🥗 Entrées', description: 'Pour bien commencer votre repas' }, plats: { name: '🥩 Plats', description: 'Une sélection de plats savoureux' }, plats_malagasy: { name: '🍚 Plats Malagasy', description: 'Découvrez les saveurs de la cuisine malgache' }, desserts: { name: '🍰 Desserts', description: 'La touche sucrée de votre repas' },
                    aperos: { name: '🍹 Apéritifs', description: 'Pour ouvrir l\'appétit' }, cocktails: { name: '🍸 Cocktails', description: 'Nos créations rafraîchissantes' }, rhum: { name: '🥃 Rhums & Spiritueux', description: 'Sélection de spiritueux fins' }, bieres: { name: '🍺 Bières', description: 'Bières locales et pression' }, eaux: { name: '💧 Eaux & Cristal', description: 'Pour vous hydrater' }, boissons_chaudes: { name: '☕ Boissons Chaudes', description: 'Cafés, thés et chocolats' }, softs: { name: '🥤 Softs & Jus', description: 'Boissons fraîches et jus' }, whisky: { name: '🥃 Whiskies', description: 'Une sélection pour les amateurs' }
                },
                items: {
                    veloute_de_potiron: { name: 'Velouté de potiron', description: 'fromage, crouton à l\'ail' }, potage_de_carotte: { name: 'Potage de carotte au fromage', description: '' }, creme_de_tarot: { name: 'Crème de tarot', description: '' }, nems_salade: { name: 'Nems salade verte', description: 'sauce arachide' }, salade_chevre: { name: 'Salade de chèvre', description: 'fines herbes, salade verte' }, crabe_farci: { name: 'Crabe farci', description: '' }, calamars_croustillants: { name: 'Calamars croustillants', description: 'salade verte' }, croquette_de_camembert: { name: 'Croquette de camembert', description: '' }, taboule: { name: 'Taboulé', description: '' }, salade_cesar: { name: 'Salade César', description: '' }, porc_grillee: { name: 'Porc grillée à la sicilienne', description: '' }, porc_moutarde: { name: 'Porc à la moutarde', description: '' }, escalope_milanaise: { name: 'Escalope milanaise', description: '' }, brochettes_de_poulet: { name: 'Brochettes de poulet', description: '' }, emince_poulet_tikka: { name: 'Emincé de poulet tikka massala', description: '' }, emince_poulet_champignons: { name: 'Emincé de poulet aux champignons', description: '' }, roule_de_volaille: { name: 'Roulé de volaille au lard à la provençale', description: '' }, cuisse_de_canard: { name: 'Cuisse de canard confite', description: 'sauce au choix' }, magret_de_canard: { name: 'Magret de canard', description: 'sauce au choix' }, magret_de_canard_farci: { name: 'Magret de canard farci', description: 'aux champignons, sauce poivre' }, cocotte_d_agneau: { name: 'Cocotte d\'agneau', description: '' }, tilapia_endasina: { name: 'Tilapia endasina sy saosy voatabia', description: 'Tilapia entier frit, sauce tomate' }, akoho_gasy: { name: 'Akoho Gasy rony', description: 'Bouillon de poulet fermier au gingembre' }, romazava_royale: { name: 'Romazava Royale', description: 'ragout de brèdes, viandes mixtes' }, henomby_ritra: { name: 'Hen\'omby ritra Royale', description: 'bœuf braisé' }, assiette_fruits: { name: 'Assiette ou Salade de fruits', description: '' }, affogato: { name: 'Affogato', description: '' }, fruits_flambes: { name: 'Fruits flambés', description: '' }, choux_craquelin: { name: 'Choux craquelin', description: 'glacé à la crème diplomate' }, panna_cotta: { name: 'Panna cotta', description: 'vanille, coulis' }, fondant_chocolat: { name: 'Fondant au chocolat', description: 'glace vanille (15 min)' }, coupe_glacee_caramel: { name: 'Coupe glacée au caramel', description: '' }, coupe_glacee_fruits: { name: 'Coupe glacée aux fruits', description: '' }, nougat_glace: { name: 'Nougat glacé', description: '' }, coupe_glace: { name: 'Coupe de Glace', description: '' },
                    pastis: { name: 'Pastis', description: '' }, ricard: { name: 'Ricard', description: '' }, tomate_perroquet_mauresque: { name: 'Tomate / Perroquet / Mauresque', description: '' }, martini_blanc_rouge: { name: 'Martini Blanc ou Rouge', description: '' }, kir_vin_blanc: { name: 'Kir au vin blanc', description: '' }, san_francisco: { name: 'San-Francisco', description: '' }, long_island: { name: 'Long Island', description: '' }, bora_bora: { name: 'Bora-bora', description: '' }, tom_collins: { name: 'Tom Collins', description: '' }, mojito: { name: 'Mojito', description: '' }, gin_harpoon: { name: 'Gin Harpoon', description: '' }, gin_import: { name: 'Gin import', description: '' }, vodka_absolut: { name: 'Vodka Absolut', description: '' }, vodka_smirnoff: { name: 'Vodka Smirnoff', description: '' }, rhum_cuvee: { name: 'Rhum Cuvée Blanche, Noir Prestige', description: '' }, thb_gm: { name: 'THB GM', description: '' }, thb_pm: { name: 'THB PM', description: '' }, fresh: { name: 'Fresh', description: '' }, gold_8: { name: 'Gold 8', description: '' }, gold_blonde: { name: 'Gold Blonde', description: '' }, eau_minerale_gm: { name: 'Eau minérale GM', description: '' }, eau_minerale_pm: { name: 'Eau minérale PM', description: '' }, cristal: { name: 'Cristal', description: '' }, ranovisy: { name: 'Ranovisy 50 Cl', description: '' }, lait_chaud: { name: 'Lait chaud', description: '' }, the: { name: 'Thé', description: '' }, chocolat_chaud: { name: 'Chocolat chaud', description: '' }, cafe: { name: 'Café', description: '' }, cafe_au_lait: { name: 'Café au lait', description: '' }, soft_gm: { name: 'Soft GM', description: '' }, soft_pm: { name: 'Soft PM', description: '' }, diabolo: { name: 'Diabolo', description: '' }, sirop_eau_vive: { name: 'Sirop - eau vive PM', description: '' }, jus_de_fruit: { name: 'Jus de fruit', description: '' }, jb: { name: 'J&B', description: '' }, ballantines: { name: 'Ballantine\'s', description: '' }, johnnie_walker_red: { name: 'Johnnie Walker Red Label', description: '' }, johnnie_walker_black: { name: 'Johnnie Walker Black Label', description: '' }, johnnie_walker_double_black: { name: 'Johnnie Walker Double Black Label', description: '' }
                },
                addOns: { accompagnements: { title: 'Ajoutez un accompagnement :', items: { riz_blanc: { name: 'Riz blanc' }, legumes_sautes: { name: 'Légumes sautés' }, pomme_sautee: { name: 'Pomme sautée' }, spaghetti: { name: 'Spaghetti' } } } }
            },
            en: {
                restaurantSlogan: "Compose your ideal menu", cartTitle: 'Your Order', cartPlaceholder: 'Select your dishes to start', totalText: 'Total:', orderBtn: 'Place Order', clearCartBtn: 'Clear Cart', tableLabel: 'Table Number', modalTitleSummary: 'Order Summary', modalMessageSummary: 'Please check your order and table number before finalizing.', modalEditBtn: 'Edit', modalConfirmBtn: 'Confirm Order', modalTitleConfirmed: 'Order Confirmed!', modalMessageConfirmed: 'Let the staff scan this QR code to complete your order.', modalCloseBtn: 'Close', alertMsg: 'Please choose your table' , tabMenu: "Menu", tabDrinks: "Drinks" , socialFollow: "📢 Follow us and give your feedback:", reviewUs: "⭐ Rate us",
                categories: {
                    entrees: { name: '🥗 Appetizers', description: 'To start your meal well' }, plats: { name: '🥩 Main Dishes', description: 'A selection of savory main dishes' }, plats_malagasy: { name: '🍚 Malagasy Dishes', description: 'Discover the flavors of Malagasy cuisine' }, desserts: { name: '🍰 Desserts', description: 'The sweet touch to your meal' },
                    aperos: { name: '🍹 Aperitifs', description: 'To whet your appetite' }, cocktails: { name: '🍸 Cocktails', description: 'Our refreshing creations' }, rhum: { name: '🥃 Rums & Spirits', description: 'Selection of fine spirits' }, bieres: { name: '🍺 Beers', description: 'Local and draft beers' }, eaux: { name: '💧 Waters', description: 'To keep you hydrated' }, boissons_chaudes: { name: '☕ Hot Drinks', description: 'Coffees, teas, and chocolates' }, softs: { name: '🥤 Soft Drinks & Juices', description: 'Cold drinks and juices' }, whisky: { name: '🥃 Whiskies', description: 'A selection for connoisseurs' }
                },
                items: {
                    veloute_de_potiron: { name: 'Pumpkin cream', description: 'cheese, garlic crouton' }, potage_de_carotte: { name: 'Carrot and Cheese Soup', description: '' }, creme_de_tarot: { name: 'Tarot Cream', description: '' }, nems_salade: { name: 'Green salad spring rolls', description: 'peanut sauce' }, salade_chevre: { name: 'Goat cheese salad', description: 'herbs, green salad' }, crabe_farci: { name: 'Stuffed crab', description: '' }, calamars_croustillants: { name: 'Crispy calamari', description: 'green salad' }, croquette_de_camembert: { name: 'Camembert croquette', description: '' }, taboule: { name: 'Taboulé', description: '' }, salade_cesar: { name: 'Caesar Salad', description: '' }, porc_grillee: { name: 'Sicilian Grilled Pork', description: '' }, porc_moutarde: { name: 'Pork with mustard', description: '' }, escalope_milanaise: { name: 'Milanese escalope', description: '' }, brochettes_de_poulet: { name: 'Chicken skewers', description: '' }, emince_poulet_tikka: { name: 'Sliced chicken tikka masala', description: '' }, emince_poulet_champignons: { name: 'Sliced chicken with mushrooms', description: '' }, roule_de_volaille: { name: 'Provençal-style poultry roll with bacon', description: '' }, cuisse_de_canard: { name: 'Confit duck leg', description: 'choice of sauce' }, magret_de_canard: { name: 'Duck breast', description: 'choice of sauce' }, magret_de_canard_farci: { name: 'Stuffed duck breast', description: 'with mushrooms, pepper sauce' }, cocotte_d_agneau: { name: 'Lamb casserole', description: '' }, tilapia_endasina: { name: 'Tilapia endasina sy saosy voatabia', description: 'Whole fried tilapia, tomato sauce' }, akoho_gasy: { name: 'Akoho Gasy rony', description: 'Broth of free-range chicken with ginger' }, romazava_royale: { name: 'Romazava Royale', description: 'ragout of greens, mixed meats' }, henomby_ritra: { name: 'Hen\'omby ritra Royale', description: 'braised beef' }, assiette_fruits: { name: 'Fruit plate or salad', description: '' }, affogato: { name: 'Affogato', description: '' }, fruits_flambes: { name: 'Flambéed fruits', description: '' }, choux_craquelin: { name: 'Choux craquelin', description: 'glazed with diplomat cream' }, panna_cotta: { name: 'Panna cotta', description: 'vanilla, coulis' }, fondant_chocolat: { name: 'Chocolate fondant', description: 'vanilla ice cream (15 min)' }, coupe_glacee_caramel: { name: 'Caramel Ice Cream Sundae', description: '' }, coupe_glacee_fruits: { name: 'Fruit ice cream sundae', description: '' }, nougat_glace: { name: 'Frozen nougat', description: '' }, coupe_glace: { name: 'Ice Cream Sundae', description: '' },
                    pastis: { name: 'Pastis', description: '' }, ricard: { name: 'Ricard', description: '' }, tomate_perroquet_mauresque: { name: 'Pastis with grenadine/mint/orgeat', description: '' }, martini_blanc_rouge: { name: 'Martini White or Red', description: '' }, kir_vin_blanc: { name: 'Kir with white wine', description: '' }, san_francisco: { name: 'San-Francisco', description: '' }, long_island: { name: 'Long Island', description: '' }, bora_bora: { name: 'Bora-bora', description: '' }, tom_collins: { name: 'Tom Collins', description: '' }, mojito: { name: 'Mojito', description: '' }, gin_harpoon: { name: 'Gin Harpoon', description: '' }, gin_import: { name: 'Imported Gin', description: '' }, vodka_absolut: { name: 'Vodka Absolut', description: '' }, vodka_smirnoff: { name: 'Vodka Smirnoff', description: '' }, rhum_cuvee: { name: 'Rum Cuvée Blanche, Noir Prestige', description: '' }, thb_gm: { name: 'THB Large', description: '' }, thb_pm: { name: 'THB Small', description: '' }, fresh: { name: 'Fresh', description: '' }, gold_8: { name: 'Gold 8', description: '' }, gold_blonde: { name: 'Gold Blonde', description: '' }, eau_minerale_gm: { name: 'Mineral Water Large', description: '' }, eau_minerale_pm: { name: 'Mineral Water Small', description: '' }, cristal: { name: 'Cristal', description: '' }, ranovisy: { name: 'Ranovisy 50cl', description: '' }, lait_chaud: { name: 'Hot Milk', description: '' }, the: { name: 'Tea', description: '' }, chocolat_chaud: { name: 'Hot Chocolate', description: '' }, cafe: { name: 'Coffee', description: '' }, cafe_au_lait: { name: 'Coffee with milk', description: '' }, soft_gm: { name: 'Soft Drink Large', description: '' }, soft_pm: { name: 'Soft Drink Small', description: '' }, diabolo: { name: 'Diabolo', description: '' }, sirop_eau_vive: { name: 'Syrup - mineral water Small', description: '' }, jus_de_fruit: { name: 'Fruit Juice', description: '' }, jb: { name: 'J&B', description: '' }, ballantines: { name: 'Ballantine\'s', description: '' }, johnnie_walker_red: { name: 'Johnnie Walker Red Label', description: '' }, johnnie_walker_black: { name: 'Johnnie Walker Black Label', description: '' }, johnnie_walker_double_black: { name: 'Johnnie Walker Double Black Label', description: '' }
                },
                addOns: { accompagnements: { title: 'Add a side dish:', items: { riz_blanc: { name: 'White rice' }, legumes_sautes: { name: 'Sautéed vegetables' }, pomme_sautee: { name: 'Sautéed potatoes' }, spaghetti: { name: 'Spaghetti' } } } }
            }
        };

        let currentLang = 'fr';
        let currentPage = 'menu';
        let cart = {};
        let activeDishSelection = null;

        function getTranslation(path, lang = currentLang) {
            return path.split('.').reduce((obj, key) => obj && obj[key], translations[lang]) || '';
        }

        function toggleLanguage() {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            document.getElementById('lang-btn').textContent = currentLang === 'fr' ? 'EN' : 'FR';
            renderAllContent();
        }

        function switchPage(page) {
            currentPage = page;
            renderContent();
            updateTabs();
        }
        
        function updateTabs() {
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active', 'border-green-500', 'text-green-600');
                button.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            });
            const activeButton = document.getElementById(`tab-${currentPage}`);
            activeButton.classList.add('active', 'border-green-500', 'text-green-600');
            activeButton.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
        }
        
        function generateCategoryHTML(data) {
            const currency = menuData.currency;
            let html = '';
            data.categories.forEach(category => {
                const categoryTranslation = getTranslation(`categories.${category.id}`);
                html += `
                    <section class="mb-12">
                        <div class="${category.colorClass} rounded-xl p-6 mb-6 shadow-lg flex items-center space-x-6">
                            <img src="${category.imageUrl}" alt="Image de la catégorie ${categoryTranslation.name}" class="w-24 h-24 object-cover rounded-lg shadow-md">
                            <div>
                                <h2 class="font-display text-2xl font-semibold text-gray-800 mb-2">${categoryTranslation.name}</h2>
                                <p class="text-gray-700 font-light">${categoryTranslation.description}</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">`;
                category.items.forEach(item => {
                    const itemTranslation = getTranslation(`items.${item.id}`);
                    html += `
                        <div class="item-card bg-white rounded-lg p-5 cursor-pointer shadow-sm" onclick="selectItem(this, '${category.id}', '${item.id}', ${item.price})">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="font-semibold text-gray-900">${itemTranslation.name}</h3>
                                <span class="text-amber-600 font-semibold">${(item.price).toLocaleString()} ${currency}</span>
                            </div>
                            <p class="text-gray-600 text-sm">${itemTranslation.description}</p>
                        </div>`;
                });
                html += `</div>`;
                if (category.addOns) {
                    const addOnTranslation = getTranslation(`addOns.${category.addOns.id}`);
                    html += `<div id="addons-${category.id}" class="bg-red-50 rounded-lg p-4 mt-6 hidden">
                                <h4 class="font-semibold text-gray-800 mb-3">${addOnTranslation.title}</h4>
                                <div class="flex flex-wrap gap-2">`;
                    category.addOns.items.forEach(addOn => {
                        const addOnItemTranslation = getTranslation(`addOns.${category.addOns.id}.items.${addOn.id}`);
                        html += `<button class="add-on-chip bg-white border border-red-200 px-3 py-2 rounded-full text-sm font-medium text-gray-700" onclick="toggleSideDish(this, '${addOn.id}', ${addOn.price})">
                                    ${addOnItemTranslation.name} (+${(addOn.price).toLocaleString()} ${currency})
                                </button>`;
                    });
                    html += `</div></div>`;
                }
                html += `</section>`;
            });
            return html;
        }

        function renderContent() {
            const container = document.getElementById('content-container');
            if (currentPage === 'menu') {
                container.innerHTML = generateCategoryHTML(menuData);
            } else {
                container.innerHTML = generateCategoryHTML(drinksData);
            }
        }

        function selectItem(element, categoryId, itemId, price) {
            document.querySelectorAll('[id^="addons-"]').forEach(el => el.classList.add('hidden'));
            const categoryCards = element.closest('section').querySelectorAll('.item-card');
            categoryCards.forEach(card => card.classList.remove('selected'));
            element.classList.add('selected');

            const itemName = getTranslation(`items.${itemId}.name`);
            const item = { id: itemId, name: itemName, price: price, category: categoryId, quantity: 1 };
            const categoryData = menuData.categories.find(c => c.id === categoryId);

            if (categoryData && categoryData.addOns) {
                document.getElementById(`addons-${categoryId}`).classList.remove('hidden');
                activeDishSelection = item;
                document.getElementById(`addons-${categoryId}`).querySelectorAll('.add-on-chip').forEach(btn => btn.classList.remove('selected'));
            } else {
                activeDishSelection = null;
            }

            if (cart[itemId] && !(categoryData && categoryData.addOns)) {
                cart[itemId].quantity++;
            } else {
                cart[itemId] = item;
            }
            updateCart();
        }
        
        function toggleSideDish(button, addOnId, addOnPrice) {
            if (!activeDishSelection) return;

            const baseDishId = activeDishSelection.id;
            const finalId = `${baseDishId}_${addOnId}`;

            delete cart[baseDishId];
            Object.keys(cart).forEach(key => { if (key.startsWith(baseDishId + '_')) delete cart[key]; });

            const allAddOnButtons = button.closest('[id^="addons-"]').querySelectorAll('.add-on-chip');
            const addOnName = getTranslation(`addOns.accompagnements.items.${addOnId}`);

            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                cart[baseDishId] = activeDishSelection;
            } else {
                allAddOnButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                cart[finalId] = { id: finalId, name: `${activeDishSelection.name} + ${addOnName.name}`, price: activeDishSelection.price + addOnPrice, category: activeDishSelection.category, quantity: 1 };
            }
            updateCart();
        }

        function updateQuantity(itemId, change) {
            if (cart[itemId]) {
                cart[itemId].quantity += change;
                if (cart[itemId].quantity <= 0) delete cart[itemId];
            }
            updateCart();
        }

        function removeFromCart(itemId) {
            if (cart[itemId]) delete cart[itemId];
            updateCart();
        }

        function updateCart() {
            const cartItemsContainer = document.getElementById('cart-items');
            const totalPriceElement = document.getElementById('total-price');
            const cartActionsElement = document.getElementById('cart-actions');
            const currency = menuData.currency;
            const cartArray = Object.values(cart);

            if (cartArray.length === 0) {
                cartItemsContainer.innerHTML = `<div id="cart-placeholder" class="text-gray-500 text-center py-8 italic">${getTranslation('cartPlaceholder')}</div>`;
                cartActionsElement.classList.add('hidden');
            } else {
                cartItemsContainer.innerHTML = cartArray.map(item => `
                    <div class="cart-item bg-gray-50 rounded-lg p-3">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-medium text-gray-900 text-sm">${item.name}</h4>
                            <button onclick="removeFromCart('${item.id}')" class="text-red-500 hover:text-red-700 text-sm font-bold">✕</button>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-2">
                                <button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 bg-gray-200 rounded-full text-sm font-bold hover:bg-gray-300">-</button>
                                <span class="text-sm font-medium">${item.quantity}</span>
                                <button onclick="updateQuantity('${item.id}', 1)" class="w-6 h-6 bg-gray-200 rounded-full text-sm font-bold hover:bg-gray-300">+</button>
                            </div>
                            <span class="font-semibold text-green-600">${(item.price * item.quantity).toLocaleString()} ${currency}</span>
                        </div>
                    </div>`).join('');
                cartActionsElement.classList.remove('hidden');
            }
            
            totalPriceElement.textContent = `${cartArray.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()} ${currency}`;
        }

        function clearCart() {
            cart = {}; activeDishSelection = null;
            document.querySelectorAll('.item-card.selected, .add-on-chip.selected').forEach(el => el.classList.remove('selected'));
            document.querySelectorAll('[id^="addons-"]').forEach(el => el.classList.add('hidden'));
            updateCart();
        }

        function showOrderSummary() {
            if (Object.keys(cart).length === 0) return;
            const modal = document.getElementById('order-modal');
            const modalContent = modal.querySelector('div > div');
            
            document.getElementById('modal-title').textContent = getTranslation('modalTitleSummary');
            document.getElementById('modal-message').textContent = getTranslation('modalMessageSummary');
            document.getElementById('order-summary-content').classList.remove('hidden');
            document.getElementById('table-select-container').classList.remove('hidden');
            document.getElementById('qrcode-container').classList.add('hidden');
            document.getElementById('modal-actions').innerHTML = `<button onclick="closeOrderModal()" class="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">${getTranslation('modalEditBtn')}</button><button onclick="confirmOrder()" class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">${getTranslation('modalConfirmBtn')}</button>`;
            
            const cartArray = Object.values(cart);
            const currency = menuData.currency;
            const total = cartArray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            document.getElementById('modal-total-text').textContent = getTranslation('totalText');
            document.getElementById('order-summary').innerHTML = cartArray.map(item => `<div class="flex justify-between py-1"><span>${item.quantity}x ${item.name}</span><span class="font-medium">${(item.price * item.quantity).toLocaleString()} ${currency}</span></div>`).join('');
            document.getElementById('modal-total').textContent = `${total.toLocaleString()} ${currency}`;

            modal.classList.remove('hidden'); modal.classList.add('flex');
            setTimeout(() => { modalContent.classList.remove('scale-95', 'opacity-0'); }, 10);
        }

        function closeOrderModal() {
            const modal = document.getElementById('order-modal');
            const modalContent = modal.querySelector('div > div');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); }, 300);
        }

        function confirmOrder() {
            const tableNumber = document.getElementById('table-number').value;
            if (!tableNumber) {
                alert(getTranslation('alertMsg'));
                return;
            }
            document.getElementById('modal-title').textContent = getTranslation('modalTitleConfirmed');
            document.getElementById('modal-message').textContent = getTranslation('modalMessageConfirmed');
            document.getElementById('order-summary-content').classList.add('hidden');
            document.getElementById('table-select-container').classList.add('hidden');
            document.getElementById('qrcode-container').classList.remove('hidden');
            generateQRCode(tableNumber);
            document.getElementById('modal-actions').innerHTML = `<button onclick="closeOrderModal(); clearCart();" class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">${getTranslation('modalCloseBtn')}</button>`;
        }
        
        function generateQRCode(tableNumber) {
            const qrcodeContainer = document.getElementById('qrcode-container');
            const compactOrder = { t: tableNumber, i: Object.values(cart).map(item => [item.id, item.quantity]) };
            const qrData = JSON.stringify(compactOrder);
            qrcodeContainer.innerHTML = '';
            new QRCode(qrcodeContainer, { text: qrData, width: 200, height: 200, colorDark : "#000000", colorLight : "#ffffff", correctLevel : QRCode.CorrectLevel.L });
        }

        function updateStaticText() {
            document.getElementById('restaurant-name').textContent = menuData.restaurantName;
            document.getElementById('restaurant-logo').src = menuData.logoPath;
            const textIds = ['restaurant-slogan', 'cart-title', 'cart-placeholder', 'total-text', 'order-btn', 'clear-cart-btn', 'table-label'];
            textIds.forEach(id => {
                document.getElementById(id).textContent = getTranslation(id.replace(/-/g, '_').replace('slogan', 'Slogan').replace('title', 'Title').replace('placeholder', 'Placeholder').replace('text', 'Text').replace('btn', 'Btn').replace('label', 'Label'));
            });
             document.getElementById('restaurant-slogan').textContent = getTranslation('restaurantSlogan');
             document.getElementById('cart-title').textContent = getTranslation('cartTitle');
             document.getElementById('cart-placeholder').textContent = getTranslation('cartPlaceholder');
             document.getElementById('total-text').textContent = getTranslation('totalText');
             document.getElementById('order-btn').textContent = getTranslation('orderBtn');
             document.getElementById('clear-cart-btn').textContent = getTranslation('clearCartBtn');
             document.getElementById('table-label').textContent = getTranslation('tableLabel');
             document.getElementById('tab-menu').textContent = getTranslation('tabMenu');
             document.getElementById('tab-drinks').textContent = getTranslation('tabDrinks');
             document.getElementById('social-follow-text').textContent = getTranslation('socialFollow');
             document.getElementById('review-us-btn').textContent = getTranslation('reviewUs');
            
        }

        function renderTableOptions() {
            const selectElement = document.getElementById('table-number');
            selectElement.innerHTML = `<option value="" disabled selected>-- ${getTranslation('tableLabel')} --</option>`;
            for (let i = 1; i <= 10; i++) {
                selectElement.innerHTML += `<option value="${i}">Table ${i}</option>`;
            }
        }
        
        function renderAllContent() {
            // 🔹 Mise à jour des éléments statiques
  const nameElement = document.getElementById('restaurant-name');
  if (nameElement) nameElement.textContent = menuData.restaurantName;

  const logoElement = document.getElementById('restaurant-logo');
  if (logoElement) logoElement.src = menuData.logoPath;

  const sloganElement = document.getElementById('restaurant-slogan');
  if (sloganElement && menuData.slogan) {
    sloganElement.textContent = menuData.slogan;
  }

  const langElement = document.getElementById('current-language');
  if (langElement) langElement.textContent = currentLanguage.toUpperCase();

  // 🔹 Fonctions existantes
            updateStaticText();
            renderContent();
            updateCart();
            renderTableOptions();
            updateTabs();
        }

        window.onload = renderAllContent;