/* =====================================================
   HERITAGE INDIA — script.js  (complete, error-free)
   ===================================================== */

// ── DATA ──────────────────────────────────────────────
// img  = local file in sites/ folder
// fallback = Unsplash CDN URL (loads in browser, no API key needed)
const SITES = [
  {
    id:'taj-mahal', name:'Taj Mahal', location:'Agra, Uttar Pradesh',
    img:'sites/taj-mahal.jpg',
    fallback:'https://images.unsplash.com/photo-1564507592208-0270e5a8fc55?w=800&q=80',
    history:'Commissioned in 1632 by Emperor Shah Jahan to house the tomb of his beloved wife Mumtaz Mahal, the Taj Mahal stands as the finest expression of Mughal architecture. The ivory-white marble mausoleum was completed in 1653 and blends Indian, Persian, and Islamic architectural styles. UNESCO World Heritage Site since 1983.',
    reco:{ time:'October – March', fee:'₹50 (Indians) · ₹1,100 (Foreigners)', tip:'Arrive at sunrise for the most spectacular golden lighting and far smaller crowds.' },
    guides:[
      { name:'Suresh Kumar',  lang:'English, Hindi',         rating:4.9, tours:312, av:'https://i.pravatar.cc/150?img=11' },
      { name:'Ali Hassan',    lang:'English, Urdu, French',  rating:4.8, tours:219, av:'https://i.pravatar.cc/150?img=14' },
      { name:'Meena Sharma',  lang:'Hindi, Bengali',         rating:4.7, tours:145, av:'https://i.pravatar.cc/150?img=5'  },
    ]
  },
  {
    id:'qutub-minar', name:'Qutub Minar', location:'Delhi',
    img:'sites/qutub-minar.jpg',
    fallback:'https://images.unsplash.com/photo-1587474260580-00100edbbce9?w=800&q=80',
    history:'The Qutub Minar is a 72.5 m high soaring minaret built by Qutb-ud-din Aibak in 1193. It is the world\'s tallest brick minaret. The surrounding complex includes India\'s first mosque and a 7th-century Iron Pillar that has resisted rusting for 1,600 years.',
    reco:{ time:'November – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Don\'t miss the enigmatic Iron Pillar — its rust-resistant composition still baffles scientists.' },
    guides:[
      { name:'Ramesh Tripathi', lang:'English, Hindi',  rating:4.8, tours:280, av:'https://i.pravatar.cc/150?img=12' },
      { name:'Fatima Sheikh',   lang:'English, Urdu',   rating:4.6, tours:170, av:'https://i.pravatar.cc/150?img=9'  },
    ]
  },
  {
    id:'red-fort', name:'Red Fort', location:'Delhi',
    img:'sites/red-fort.jpg',
    fallback:'https://images.unsplash.com/photo-1585084335487-f659d081128b?w=800&q=80',
    history:'Built by Shah Jahan in 1638, the Red Fort\'s massive red sandstone walls stretch 2.5 km. It served as the main Mughal residence for 200 years. On 15 August 1947 — India\'s first Independence Day — Prime Minister Nehru hoisted the tricolour flag here.',
    reco:{ time:'October – March', fee:'₹35 (Indians) · ₹500 (Foreigners)', tip:'Attend the evening Sound & Light Show for a vivid narration of India\'s Mughal history.' },
    guides:[
      { name:'Arjun Singh', lang:'English, Hindi, Punjabi', rating:4.9, tours:355, av:'https://i.pravatar.cc/150?img=15' },
      { name:'Priya Verma', lang:'English, Hindi',          rating:4.7, tours:198, av:'https://i.pravatar.cc/150?img=18' },
    ]
  },
  {
    id:'ajanta-caves', name:'Ajanta Caves', location:'Maharashtra',
    img:'sites/ajanta-caves.jpg',
    fallback:'https://images.unsplash.com/photo-1621831800053-535d5d67fc36?w=800&q=80',
    history:'The 30 rock-cut Buddhist cave monuments of Ajanta date from the 2nd century BCE to about 480 CE. They contain some of the finest surviving examples of ancient Indian art — paintings and sculptures documenting the life of the Buddha. Rediscovered by British officer John Smith in 1819.',
    reco:{ time:'June – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Carry a small mirror to reflect natural light into darker caves to see the paintings clearly.' },
    guides:[
      { name:'Rahul Patil',   lang:'English, Marathi, Hindi', rating:4.9, tours:290, av:'https://i.pravatar.cc/150?img=16' },
      { name:'Sunita Jadhav', lang:'English, Marathi',        rating:4.7, tours:140, av:'https://i.pravatar.cc/150?img=22' },
    ]
  },
  {
    id:'ellora-caves', name:'Ellora Caves', location:'Maharashtra',
    img:'sites/ellora-caves.jpg',
    fallback:'https://images.unsplash.com/photo-1627883204928-1b0728c4b126?w=800&q=80',
    history:'Ellora\'s 34 monasteries and temples spanning 2 km were built between the 6th–11th centuries. It uniquely unites Hindu, Buddhist, and Jain monuments carved directly from basalt. Cave 16, the Kailasa Temple, is the world\'s largest monolith — chiselled from a single rock, top-down.',
    reco:{ time:'June – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Allocate at least 3 hours exclusively for Cave 16 (Kailasa Temple) — it is breathtaking in scale.' },
    guides:[
      { name:'Vinod Kulkarni', lang:'English, Marathi, Hindi', rating:4.8, tours:265, av:'https://i.pravatar.cc/150?img=17' },
      { name:'Kavita Desai',   lang:'English, Marathi',        rating:4.6, tours:122, av:'https://i.pravatar.cc/150?img=26' },
    ]
  },
  {
    id:'sun-temple', name:'Sun Temple', location:'Konark, Odisha',
    img:'sites/sun-temple.jpg',
    fallback:'https://images.unsplash.com/photo-1601334674063-22684b0d1e57?w=800&q=80',
    history:'Built in 1250 CE by King Narasimhadeva I, the Konark Sun Temple is designed as a chariot of the Sun God Surya with 12 pairs of ornate stone wheels and 7 horses. Arab and European sailors once used the temple\'s iron as a navigational beacon.',
    reco:{ time:'September – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Visit during the February Konark Dance Festival to experience classical dance at the monument.' },
    guides:[
      { name:'Bijay Panda',     lang:'English, Odia, Hindi', rating:4.9, tours:310, av:'https://i.pravatar.cc/150?img=20' },
      { name:'Sasmita Mohanty', lang:'English, Odia',        rating:4.7, tours:180, av:'https://i.pravatar.cc/150?img=25' },
    ]
  },
  {
    id:'khajuraho', name:'Khajuraho Group', location:'Madhya Pradesh',
    img:'sites/khajuraho.jpg',
    fallback:'https://images.unsplash.com/photo-1616058055610-18e388cbf639?w=800&q=80',
    history:'Built by the Chandela dynasty between 950–1050 CE, these 25 surviving temples display extraordinary devotional art and erotic sculpture reflecting the Hindu philosophy of artha and kama. "Rediscovered" by British surveyor T.S. Burt in 1838 after centuries hidden by jungle.',
    reco:{ time:'October – February', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Book a licensed guide — the symbolic depth of the carvings is impossible to appreciate without context.' },
    guides:[
      { name:'Mohit Tiwari', lang:'English, Hindi',         rating:4.8, tours:242, av:'https://i.pravatar.cc/150?img=13' },
      { name:'Deepa Jain',   lang:'English, Hindi, Bundeli', rating:4.7, tours:190, av:'https://i.pravatar.cc/150?img=32' },
    ]
  },
  {
    id:'hampi', name:'Hampi Monuments', location:'Karnataka',
    img:'sites/hampi.jpg',
    fallback:'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=800&q=80',
    history:'Hampi was the capital of the Vijayanagara Empire from the 14th–16th centuries, one of the richest cities in the world at its peak. It was ransacked after the Battle of Talikota in 1565 and today stands as a surreal landscape of temples, marketplaces, and elephant stables.',
    reco:{ time:'October – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Rent a bicycle to cover the vast ruins — the landscape is especially magical at golden hour.' },
    guides:[
      { name:'Krishna Nagara', lang:'English, Kannada, Hindi', rating:4.9, tours:387, av:'https://i.pravatar.cc/150?img=21' },
      { name:'Lakshmi Gowda',  lang:'English, Kannada',        rating:4.6, tours:165, av:'https://i.pravatar.cc/150?img=34' },
    ]
  },
  {
    id:'fatehpur-sikri', name:'Fatehpur Sikri', location:'Uttar Pradesh',
    img:'sites/fatehpur-sikri.jpg',
    fallback:'https://images.unsplash.com/photo-1588661609101-b2195fabb3d1?w=800&q=80',
    history:'Founded in 1569 by Emperor Akbar and serving as the Mughal capital for 14 years, Fatehpur Sikri is built predominantly in red sandstone. It includes the Buland Darwaza — the world\'s highest gateway — and palaces reflecting Hindu, Jain, and Islamic artistic traditions.',
    reco:{ time:'October – March', fee:'₹50 (Indians) · ₹610 (Foreigners)', tip:'Visit in the morning to admire the warm ochre hue of the sandstone in early sunlight.' },
    guides:[
      { name:'Irfan Siddiqui', lang:'English, Urdu, Hindi', rating:4.8, tours:275, av:'https://i.pravatar.cc/150?img=24' },
      { name:'Rekha Sharma',   lang:'English, Hindi',        rating:4.5, tours:130, av:'https://i.pravatar.cc/150?img=38' },
    ]
  },
  {
    id:'elephanta-caves', name:'Elephanta Caves', location:'Mumbai, Maharashtra',
    img:'sites/elephanta-caves.jpg',
    fallback:'https://images.unsplash.com/photo-1625807921200-a5fb9cf5f769?w=800&q=80',
    history:'Rock temples hewn from the basalt bedrock of Elephanta Island in Mumbai Harbour, dating to the 5th–8th centuries CE. The central Cave 1 contains the celebrated 6-metre Trimurti sculpture — one of the greatest achievements of ancient Indian art.',
    reco:{ time:'November – February', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Take the hourly ferry from the Gateway of India. Visit on a weekday to avoid weekend crowds.' },
    guides:[
      { name:'Mahesh Kadam', lang:'English, Marathi, Hindi',   rating:4.8, tours:220, av:'https://i.pravatar.cc/150?img=27' },
      { name:'Priti Nair',   lang:'English, Malayalam, Hindi', rating:4.6, tours:155, av:'https://i.pravatar.cc/150?img=40' },
    ]
  },
  {
    id:'chola-temples', name:'Great Chola Temples', location:'Tamil Nadu',
    img:'sites/chola-temples.jpg',
    fallback:'https://images.unsplash.com/photo-1615707572709-b4b9b00addad?w=800&q=80',
    history:'Three temples built by the Chola kings — Brihadisvara (Thanjavur), Gangaikondacholisvaram, and Airavatesvara (Darasuram) — represent the zenith of Chola architecture. The Thanjavur temple features a 63-metre vimana built entirely without mortar.',
    reco:{ time:'November – March', fee:'Free for main areas', tip:'Visit at 6 AM for the morning Aarti ceremony — an unforgettable spiritual experience.' },
    guides:[
      { name:'Subramaniam R.', lang:'English, Tamil, Hindi', rating:4.9, tours:400, av:'https://i.pravatar.cc/150?img=29' },
      { name:'Meenakshi S.',   lang:'English, Tamil',        rating:4.7, tours:210, av:'https://i.pravatar.cc/150?img=44' },
    ]
  },
  {
    id:'mahabalipuram', name:'Mahabalipuram', location:'Tamil Nadu',
    img:'sites/mahabalipuram.jpg',
    fallback:'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80',
    history:'The 7th and 8th century rock-cut temples of Mahabalipuram were created by the Pallava dynasty. The site features the world\'s largest open-air bas-relief (Arjuna\'s Penance), the Shore Temple, and five monolithic chariots carved at the Bay of Bengal coastline.',
    reco:{ time:'December – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Visit the Shore Temple at sunset for the most photogenic golden hour lighting over the sea.' },
    guides:[
      { name:'Babu Murugan',   lang:'English, Tamil, Hindi', rating:4.8, tours:260, av:'https://i.pravatar.cc/150?img=31' },
      { name:'Devi Annamalai', lang:'English, Tamil',        rating:4.6, tours:138, av:'https://i.pravatar.cc/150?img=47' },
    ]
  },
  {
    id:'sanchi-stupa', name:'Sanchi Stupa', location:'Madhya Pradesh',
    img:'sites/sanchi-stupa.jpg',
    fallback:'https://images.unsplash.com/photo-1621508821901-2051010dbde8?w=800&q=80',
    history:'One of India\'s oldest stone structures, the Great Stupa at Sanchi was originally commissioned by Emperor Ashoka in the 3rd century BCE. Its four ornate Toranas (gateways) narrate scenes from Buddha\'s life. Rediscovered by James Prinsep in 1818.',
    reco:{ time:'November – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Study the carved Toranas carefully — every inch tells a story from the life of Buddha.' },
    guides:[
      { name:'Rajesh Soni',  lang:'English, Hindi',          rating:4.7, tours:195, av:'https://i.pravatar.cc/150?img=33' },
      { name:'Nandini Rao',  lang:'English, Hindi, Marathi', rating:4.5, tours:110, av:'https://i.pravatar.cc/150?img=48' },
    ]
  },
  {
    id:'agra-fort', name:'Agra Fort', location:'Uttar Pradesh',
    img:'sites/agra-fort.jpg',
    fallback:'https://images.unsplash.com/photo-1596541604313-05bc58eabfcc?w=800&q=80',
    history:'A UNESCO World Heritage Site and main Mughal residence for generations. Agra Fort\'s red sandstone walls stretch 2.5 km. Shah Jahan spent his final years imprisoned here, gazing at the Taj Mahal from the Musamman Burj tower.',
    reco:{ time:'October – March', fee:'₹50 (Indians) · ₹650 (Foreigners)', tip:'From the Musamman Burj, capture a stunning framed view of the Taj Mahal — perfect for photography.' },
    guides:[
      { name:'Khalid Baig',    lang:'English, Urdu, Hindi', rating:4.8, tours:299, av:'https://i.pravatar.cc/150?img=35' },
      { name:'Sunita Agarwal', lang:'English, Hindi',        rating:4.6, tours:173, av:'https://i.pravatar.cc/150?img=50' },
    ]
  },
  {
    id:'pattadakal', name:'Pattadakal Monuments', location:'Karnataka',
    img:'sites/pattadakal.jpg',
    fallback:'https://images.unsplash.com/photo-1582236526156-f25a9f2ce477?w=800&q=80',
    history:'A complex of 7th–8th century CE Chalukyan temples achieving a unique blend of North Indian Nagara and South Indian Dravida architectural styles. The Virupaksha Temple was commissioned by Queen Lokamahadevi in 740 CE to celebrate her husband\'s victory over the Pallavas.',
    reco:{ time:'October – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Compare the Nagara and Dravida-style temples side-by-side — this architectural fusion exists almost nowhere else.' },
    guides:[
      { name:'Veeresh Hugar', lang:'English, Kannada, Hindi', rating:4.7, tours:188, av:'https://i.pravatar.cc/150?img=36' },
      { name:'Savita Patil',  lang:'English, Kannada',        rating:4.6, tours:120, av:'https://i.pravatar.cc/150?img=51' },
    ]
  },
  {
    id:'bodh-gaya', name:'Mahabodhi Temple', location:'Bodh Gaya, Bihar',
    img:'sites/bodh-gaya.jpg',
    fallback:'https://images.unsplash.com/photo-1554520770-071a179ee668?w=800&q=80',
    history:'One of the four holiest Buddhist pilgrimage sites in the world. Bodh Gaya is where Siddhartha Gautama attained Enlightenment around 528 BCE. The current 50-metre Mahabodhi Temple dates to the 5th–6th centuries and remains one of history\'s most sacred living temples.',
    reco:{ time:'October – March', fee:'Free (cameras ₹100)', tip:'Maintain quiet reverence throughout the complex. Meditate under the descendant Bodhi Tree.' },
    guides:[
      { name:'Tenzin Choephel', lang:'English, Tibetan, Hindi', rating:5.0, tours:430, av:'https://i.pravatar.cc/150?img=37' },
      { name:'Kamala Devi',     lang:'English, Hindi, Pali',    rating:4.8, tours:215, av:'https://i.pravatar.cc/150?img=53' },
    ]
  },
  {
    id:'champaner', name:'Champaner-Pavagadh', location:'Gujarat',
    img:'sites/champaner.jpg',
    fallback:'https://images.unsplash.com/photo-1598444390637-ad348082fa2c?w=800&q=80',
    history:'An archaeological park with prehistoric sites, a Hindu capital of the 8th century, and a 16th-century Muslim capital city. The Jama Masjid here is one of the finest in Gujarat, featuring a remarkable fusion of Hindu and Islamic architectural elements.',
    reco:{ time:'October – February', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'The Jama Masjid features a remarkable fusion of Hindu and Islamic architecture — one of Gujarat\'s finest.' },
    guides:[
      { name:'Govind Patel', lang:'English, Gujarati, Hindi', rating:4.7, tours:176, av:'https://i.pravatar.cc/150?img=39' },
      { name:'Hetal Shah',   lang:'English, Gujarati',        rating:4.5, tours:98,  av:'https://i.pravatar.cc/150?img=55' },
    ]
  },
  {
    id:'goa-churches', name:'Churches of Goa', location:'Old Goa',
    img:'sites/goa-churches.jpg',
    fallback:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    history:'The Basilica of Bom Jesus, consecrated in 1605, holds the mortal remains of St. Francis Xavier. These monuments showcase Portuguese Baroque in its grandest form and shaped the spread of Manueline, Mannerist, and Baroque art throughout Asia.',
    reco:{ time:'November – February', fee:'Generally free', tip:'Visit on the Feast of St. Francis Xavier (December 3rd) for an extraordinary celebration observed by millions.' },
    guides:[
      { name:"Felix D'Souza",   lang:'English, Konkani, Portuguese', rating:4.9, tours:322, av:'https://i.pravatar.cc/150?img=41' },
      { name:'Clara Fernandes', lang:'English, Konkani',               rating:4.7, tours:189, av:'https://i.pravatar.cc/150?img=56' },
    ]
  },
  {
    id:'jantar-mantar', name:'Jantar Mantar', location:'Jaipur, Rajasthan',
    img:'sites/jantar-mantar.jpg',
    fallback:'https://images.unsplash.com/photo-1502120025114-1e5b4b1a13b6?w=800&q=80',
    history:'Built by Maharaja Jai Singh II in 1734, Jantar Mantar is a collection of 20 fixed astronomical instruments designed for naked-eye observation. These giant stone and marble devices can tell time to the second, predict eclipses, and determine celestial altitudes.',
    reco:{ time:'October – March', fee:'₹50 (Indians) · ₹200 (Foreigners)', tip:'Hiring a guide is essential to understand how these massive devices function in practice.' },
    guides:[
      { name:'Mahendra Saxena', lang:'English, Hindi, Rajasthani', rating:4.9, tours:350, av:'https://i.pravatar.cc/150?img=43' },
      { name:'Sunita Rawat',    lang:'English, Hindi',             rating:4.6, tours:160, av:'https://i.pravatar.cc/150?img=58' },
    ]
  },
  {
    id:'rani-ki-vav', name:'Rani ki Vav', location:'Patan, Gujarat',
    img:'sites/rani-ki-vav.jpg',
    fallback:'https://images.unsplash.com/photo-1524492412937-b28076a5d7da?w=800&q=80',
    history:'Built in the 11th century as a memorial to King Bhimdev I by Queen Udayamati, Rani ki Vav is an inverted temple designed to highlight the sanctity of water. It features 500 principal sculptures and was submerged for 700 years before being excavated in the 1980s.',
    reco:{ time:'October – March', fee:'₹40 (Indians) · ₹600 (Foreigners)', tip:'Look for the Apsara figure said to be combing her hair — it appears on India\'s ₹100 currency note.' },
    guides:[
      { name:'Kiran Bhatt',  lang:'English, Gujarati, Hindi', rating:4.8, tours:230, av:'https://i.pravatar.cc/150?img=45' },
      { name:'Ananya Mehta', lang:'English, Gujarati',        rating:4.7, tours:145, av:'https://i.pravatar.cc/150?img=60' },
    ]
  },
];

// ── FOOD & CUISINE DATA ─────────────────────────────────
// img = Unsplash CDN (no API key needed), seed = Picsum fallback key.
// type: veg | nonveg | Filters use: veg / nonveg / street / sweet
const FOODS = [
  { seed:'petha-agra', name:'Agra Petha', site:'Taj Mahal · Agra Fort', type:'veg', cat:'sweet', price:'Rs.120 / box', spice:'mild', spiceLabel:'Sweet · No spice',
    img:'https://images.unsplash.com/photo-1610508500445-a4592435e27e?w=600&q=80',
    desc:'Translucent ash-gourd candy, Agra\u2019s most famous souvenir. Try Kesar, Paan and Chocolate flavours at Panchhi Petha.' },
  { seed:'bedai-agra', name:'Bedai & Jalebi', site:'Taj Mahal · Agra', type:'veg', cat:'street', price:'Rs.60 / plate', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    desc:'Crisp fried Bedai poori with spicy aloo sabzi and hot jalebis — the classic Agra breakfast.' },
  { seed:'mughlai-agra', name:'Mughlai Biryani', site:'Fatehpur Sikri · Agra', type:'nonveg', cat:'mughlai', price:'Rs.220 / plate', spice:'hot', spiceLabel:'Rich & spicy',
    img:'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80',
    desc:'Fragrant dum biryani with saffron, kewra and tender mutton — legacy of the Mughal kitchens of Agra.' },
  { seed:'paratha-delhi', name:'Paranthe Wali Gali Platter', site:'Red Fort · Delhi', type:'veg', cat:'street', price:'Rs.150 / thali', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    desc:'Legendary Chandni Chowk lane serving 30+ stuffed parathas — gobhi, aloo, rabri — with sweet lassi.' },
  { seed:'chole-delhi', name:'Chole Bhature', site:'Qutub Minar · Delhi', type:'veg', cat:'street', price:'Rs.100 / plate', spice:'hot', spiceLabel:'Spicy',
    img:'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&q=80',
    desc:'Fluffy bhature with dark tangy Amritsari chole, pickled onions and green chilli — Delhi\u2019s brunch.' },
  { seed:'kebabs-delhi', name:'Old Delhi Kebabs', site:'Red Fort · Delhi', type:'nonveg', cat:'street', price:'Rs.250 / plate', spice:'hot', spiceLabel:'Charcoal grilled',
    img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    desc:'Seekh kebabs, chicken tikka and mutton burra from Karim\u2019s and Qureshi Kabab Corner near Jama Masjid.' },
  { seed:'misal-maha', name:'Misal Pav', site:'Ajanta · Ellora · Elephanta', type:'veg', cat:'street', price:'Rs.80 / plate', spice:'hot', spiceLabel:'Fiery',
    img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
    desc:'Sprouted bean curry topped with farsan, onion and lemon, mopped up with pav — Maharashtra\u2019s icon.' },
  { seed:'vada-mumbai', name:'Vada Pav', site:'Elephanta Caves · Mumbai', type:'veg', cat:'street', price:'Rs.25 / piece', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
    desc:'Mumbai\u2019s burger — crisp batata vada in soft pav with garlic chutney. Grab one at the Gateway jetty.' },
  { seed:'modak-maha', name:'Ukadiche Modak', site:'Ajanta · Ellora Caves', type:'veg', cat:'sweet', price:'Rs.40 / piece', spice:'mild', spiceLabel:'Sweet · No spice',
    img:'https://images.unsplash.com/photo-1601303516361-9e8a7a0e0e0e?w=600&q=80',
    desc:'Steamed rice-flour dumplings stuffed with coconut-jaggery — found across Maharashtra.' },
  { seed:'chhena-odisha', name:'Chhena Poda', site:'Sun Temple · Konark', type:'veg', cat:'sweet', price:'Rs.180 / kg', spice:'mild', spiceLabel:'Sweet · No spice',
    img:'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=600&q=80',
    desc:'Odisha\u2019s legendary baked cheese dessert — caramelised chhena with cardamom, best eaten warm.' },
  { seed:'dalma-odisha', name:'Dalma & Pakhala', site:'Sun Temple · Konark', type:'veg', cat:'traditional', price:'Rs.120 / thali', spice:'mild', spiceLabel:'Mild & wholesome',
    img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    desc:'Lentils cooked with raw papaya and pumpkin, served with fermented Pakhala rice — soul food of Odisha.' },
  { seed:'poha-mp', name:'Poha Jalebi', site:'Sanchi Stupa · Khajuraho', type:'veg', cat:'street', price:'Rs.50 / plate', spice:'mild', spiceLabel:'Light & tangy',
    img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    desc:'Madhya Pradesh\u2019s iconic breakfast — flattened rice with peanuts and curry leaves, plus crisp jalebi.' },
  { seed:'bhutte-mp', name:'Bhutte ka Kees', site:'Sanchi · Khajuraho', type:'veg', cat:'street', price:'Rs.70 / plate', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80',
    desc:'Grated corn sauteed in ghee with mustard, coconut and coriander — Indore\u2019s monsoon-famous snack.' },
  { seed:'bisi-karnataka', name:'Bisi Bele Bath', site:'Hampi · Pattadakal', type:'veg', cat:'traditional', price:'Rs.90 / plate', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80',
    desc:'Karnataka\u2019s hot lentil-rice comfort dish with tamarind and vegetables, topped with ghee and boondi.' },
  { seed:'dosa-karnataka', name:'Mysore Masala Dosa', site:'Hampi · Pattadakal', type:'veg', cat:'street', price:'Rs.110 / plate', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80',
    desc:'Crisp dosa smeared with red garlic chutney, stuffed with potato palya — best with filter coffee.' },
  { seed:'chettinad-tn', name:'Chettinad Chicken Curry', site:'Chola Temples · Mahabalipuram', type:'nonveg', cat:'traditional', price:'Rs.260 / meal', spice:'hot', spiceLabel:'Fiery & aromatic',
    img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    desc:'Black-pepper and stone-flower spiced chicken curry from Chettinad — Tamil Nadu\u2019s celebrated cuisine.' },
  { seed:'filter-tn', name:'Filter Coffee & Pongal', site:'Chola Temples · Tamil Nadu', type:'veg', cat:'traditional', price:'Rs.60 / set', spice:'mild', spiceLabel:'Mild & comforting',
    img:'https://images.unsplash.com/photo-1617695742797-8c0d1b0b0b0e?w=600&q=80',
    desc:'Frothy dabara filter coffee with ghee ven pongal — the perfect temple-town breakfast near Thanjavur.' },
  { seed:'litti-bihar', name:'Litti Chokha', site:'Mahabodhi Temple · Bodh Gaya', type:'veg', cat:'traditional', price:'Rs.80 / plate', spice:'medium', spiceLabel:'Smoky & rustic',
    img:'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&q=80',
    desc:'Ghee-roasted wheat balls stuffed with sattu, served with smoky baingan-tomato chokha — Bihar\u2019s pride.' },
  { seed:'dhokla-gujarat', name:'Khaman Dhokla & Fafda', site:'Rani ki Vav · Champaner', type:'veg', cat:'street', price:'Rs.70 / plate', spice:'mild', spiceLabel:'Mild & tangy',
    img:'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&q=80',
    desc:'Spongy steamed dhokla with fafda-jalebi on Sundays — Gujarat\u2019s beloved light breakfast near Patan.' },
  { seed:'vindaloo-goa', name:'Goan Fish Curry & Vindaloo', site:'Churches of Goa', type:'nonveg', cat:'traditional', price:'Rs.300 / meal', spice:'hot', spiceLabel:'Tangy & fiery',
    img:'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&q=80',
    desc:'Kokum-soured fish curry with red rice, or pork vindaloo with poi — Portuguese-influenced classics.' },
  { seed:'bebinca-goa', name:'Bebinca & Dodol', site:'Churches of Goa', type:'veg', cat:'sweet', price:'Rs.350 / pack', spice:'mild', spiceLabel:'Sweet · No spice',
    img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
    desc:'16-layered Indo-Portuguese pudding of coconut milk and egg yolk — Old Goa\u2019s queen of desserts.' },
  { seed:'pyaaz-rajasthan', name:'Pyaaz Kachori & Dal Baati', site:'Jantar Mantar · Jaipur', type:'veg', cat:'street', price:'Rs.130 / thali', spice:'medium', spiceLabel:'Medium spicy',
    img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    desc:'Flaky onion kachori plus dal-baati-churma thali — Jaipur\u2019s must-eat royal combo.' },
  { seed:'ghevar-rajasthan', name:'Ghevar & Mawa Kachori', site:'Jantar Mantar · Jaipur', type:'veg', cat:'sweet', price:'Rs.400 / kg', spice:'mild', spiceLabel:'Sweet · No spice',
    img:'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?w=600&q=80',
    desc:'Honeycomb-textured monsoon sweet soaked in syrup and topped with rabri — Jaipur\u2019s showstopper.' },
  { seed:'meals-south', name:'South Indian Meals', site:'All South Sites', type:'veg', cat:'traditional', price:'Rs.140 / meals', spice:'medium', spiceLabel:'Balanced & hearty',
    img:'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80',
    desc:'Banana-leaf meals with sambar, rasam, kootu, poriyal and curd — wholesome add-on to any southern trip.' },
  // __FOODS_PART2__
];

const REVIEWS = [
  { name:'Arjun Patel',      av:'https://i.pravatar.cc/150?img=11', visited:'Taj Mahal',          stars:5, text:'Visiting at sunrise was beyond words. The marble changes colour with the light — go early, avoid the crowds, give yourself at least 2 hours to soak it in.' },
  { name:'Sneha Sharma',     av:'https://i.pravatar.cc/150?img=22', visited:'Ajanta Caves',        stars:5, text:'The painted frescos have survived 2,000 years and still radiate life. Our guide knew astonishing detail about every painting.' },
  { name:'James Mitchell',   av:'https://i.pravatar.cc/150?img=16', visited:'Hampi Monuments',     stars:5, text:'Renting a bicycle at sunrise and cycling through the ruins alone — the single most magical morning of my life.' },
  { name:'Priya Nair',       av:'https://i.pravatar.cc/150?img=40', visited:'Mahabalipuram',       stars:4, text:'The Shore Temple at golden hour with waves crashing behind it — one of the most photogenic scenes I have ever captured.' },
  { name:'David Chen',       av:'https://i.pravatar.cc/150?img=20', visited:'Ellora Caves',        stars:5, text:'The Kailasa Temple defies belief. Carved from a single mountain, top-down, without drawings — it questions what humans are capable of.' },
  { name:'Fatima Al-Rashid', av:'https://i.pravatar.cc/150?img=34', visited:'Red Fort',            stars:4, text:'The sheer scale of the fort is humbling. The Sound & Light show in the evening is theatrical and beautifully narrated.' },
  { name:'Rohan Kapoor',     av:'https://i.pravatar.cc/150?img=36', visited:'Rani ki Vav',        stars:5, text:'I had never heard of a stepwell and I was not prepared for this. Descending into those levels of intricate sculptures felt like another dimension.' },
  { name:'Maria Gomez',      av:'https://i.pravatar.cc/150?img=56', visited:'Churches of Goa',     stars:5, text:'The Basilica of Bom Jesus has the most serene atmosphere I have experienced in any religious monument globally. Simply humbling.' },
  { name:'Ananya Misra',     av:'https://i.pravatar.cc/150?img=44', visited:'Jantar Mantar',       stars:4, text:'A scientific marvel masquerading as an art installation. Our guide showed how the sundial tells time accurate to 2 seconds — speechless.' },
];

// ── HELPERS ───────────────────────────────────────────
const $ = id => document.getElementById(id);

function starHTML(n) {
  const full = Math.round(n);
  return '★'.repeat(full) + '☆'.repeat(5 - full) +
    ` <span style="color:#78716c;font-size:.78rem;">${n}</span>`;
}

// Build an <img> with a 3-level fallback chain:
// local file -> Unsplash CDN -> Picsum placeholder (never shows broken)
function imgTag(site, cls='') {
  return `<img src="${site.img}" alt="${site.name}" ${cls ? `class="${cls}"` : ''}
    onerror="if(!this.dataset.f1){this.dataset.f1=1;this.src='${site.fallback}';}else if(!this.dataset.f2){this.dataset.f2=1;this.src='https://picsum.photos/seed/${site.id}/800/500';}">`;
}

// Same chain for food images: Unsplash CDN -> Picsum placeholder
function foodImgTag(food) {
  return `<img src="${food.img}" alt="${food.name}" loading="lazy"
    onerror="if(!this.dataset.f1){this.dataset.f1=1;this.src='https://picsum.photos/seed/${food.seed}/600/400';}">`;
}

// Single food card used in Food view + site detail "Local Food" block
function foodCardHTML(f) {
  const typeBadge = f.type === 'veg'
    ? '<span class="food-type-badge veg">Veg</span>'
    : '<span class="food-type-badge nonveg">Non-Veg</span>';
  const spiceCls = f.spice === 'mild' ? 'mild' : (f.spice === 'medium' ? 'medium' : '');
  return `<div class="food-card" data-type="${f.type}" data-cat="${f.cat}">
    <div class="food-img">${foodImgTag(f)}${typeBadge}<span class="food-cat-badge">${f.cat}</span></div>
    <div class="food-info">
      <h3>${f.name}</h3>
      <div class="food-site"><i class="fa-solid fa-location-dot"></i> ${f.site}</div>
      <p class="food-desc">${f.desc}</p>
      <div class="food-meta">
        <span class="food-price">${f.price}</span>
        <span class="food-spice ${spiceCls}"><i class="fa-solid fa-fire"></i> ${f.spiceLabel}</span>
      </div>
    </div>
  </div>`;
}

// ── MAIN ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // DOM refs
  const navBtns          = document.querySelectorAll('.nav-btn');
  const views            = document.querySelectorAll('.view');
  const sidebarSitesWrap = $('sidebarSitesWrap');
  const siteListEl       = $('siteList');
  const sliderTrack      = $('sliderTrack');
  const sitesGrid        = $('sitesGrid');
  const siteDetail       = $('siteDetail');
  const reviewsGrid      = $('reviewsGrid');
  const bookingModal     = $('bookingModal');
  const modalMsg         = $('modalMsg');

  // ── VIEW SWITCHING ────────────────────────────────
  function switchView(viewId) {
    navBtns.forEach(b => b.classList.toggle('active', b.dataset.view === viewId));
    views.forEach(v  => v.classList.toggle('active-view', v.id === viewId));
    sidebarSitesWrap.style.display = viewId === 'exploreView' ? 'flex' : 'none';
  }

  navBtns.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
  $('goExploreBtn').addEventListener('click', () => switchView('exploreView'));
  const goFoodBtn = $('goFoodBtn');
  if (goFoodBtn) goFoodBtn.addEventListener('click', () => switchView('foodView'));

  // Food grid + category filters
  let foodFilter = 'all';
  function buildFoodGrid() {
    const grid = $('foodGrid');
    if (!grid || typeof FOODS === 'undefined') return;
    const items = FOODS.filter(f =>
      foodFilter === 'all' ? true :
      foodFilter === 'veg' ? f.type === 'veg' :
      foodFilter === 'nonveg' ? f.type === 'nonveg' :
      f.cat === foodFilter);
    grid.innerHTML = items.length
      ? items.map(foodCardHTML).join('')
      : '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:30px;">No dishes in this category yet.</p>';
  }
  document.querySelectorAll('.food-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.food-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      foodFilter = btn.dataset.filter;
      buildFoodGrid();
    });
  });

  // ── SLIDER ARROWS ────────────────────────────────
  $('sliderLeft').addEventListener('click',  () => sliderTrack.scrollBy({ left: -320, behavior:'smooth' }));
  $('sliderRight').addEventListener('click', () => sliderTrack.scrollBy({ left:  320, behavior:'smooth' }));

  // ── BUILD ALL CARD SETS ───────────────────────────
  function buildSiteCards() {
    SITES.forEach(site => {

      // 1. Slider thumbnail
      const sc = document.createElement('div');
      sc.className  = 'slide-card';
      sc.dataset.id = site.id;
      sc.innerHTML  = `${imgTag(site)}<div class="slide-label">${site.name}</div>`;
      sc.addEventListener('click', () => { switchView('exploreView'); openSite(site.id); });
      sliderTrack.appendChild(sc);

      // 2. Explore grid card
      const gc = document.createElement('div');
      gc.className  = 'grid-card';
      gc.dataset.id = site.id;
      gc.innerHTML  = `
        <div class="gc-img">${imgTag(site)}<span class="gc-badge">UNESCO</span></div>
        <div class="gc-info">
          <h3>${site.name}</h3>
          <p><i class="fa-solid fa-location-dot"></i> ${site.location}</p>
        </div>`;
      gc.addEventListener('click', () => openSite(site.id));
      sitesGrid.appendChild(gc);

      // 3. Sidebar list item
      const li = document.createElement('li');
      li.dataset.id = site.id;
      li.textContent = site.name;
      li.addEventListener('click', () => { switchView('exploreView'); openSite(site.id); });
      siteListEl.appendChild(li);
    });
  }

  // ── OPEN SITE DETAIL ─────────────────────────────
  function openSite(id) {
    const site = SITES.find(s => s.id === id);
    if (!site) return;

    // Highlight active state
    document.querySelectorAll('.slide-card').forEach(c => c.classList.toggle('active', c.dataset.id === id));
    document.querySelectorAll('#siteList li').forEach(l => l.classList.toggle('active', l.dataset.id === id));

    // Scroll active slider card into view
    const activeSlide = sliderTrack.querySelector(`[data-id="${id}"]`);
    if (activeSlide) activeSlide.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });

    // Show detail, hide grid
    sitesGrid.style.display  = 'none';
    siteDetail.style.display = 'block';
    renderDetail(site);
  }

  // ── RENDER DETAIL VIEW ───────────────────────────
  function renderDetail(site) {
    const guidesHTML = site.guides.map(g => `
      <div class="guide-card">
        <img class="guide-avatar" src="${g.av}" alt="${g.name}"
          onerror="this.onerror=null;this.src='https://i.pravatar.cc/150?img=1'">
        <div class="guide-name">${g.name}</div>
        <div class="guide-lang"><i class="fa-solid fa-language"></i> ${g.lang}</div>
        <div class="guide-stars">${starHTML(g.rating)}</div>
        <div class="guide-tours">${g.tours} tours completed</div>
        <button class="book-btn" data-guide="${g.name}" data-site="${site.name}">
          <i class="fa-solid fa-calendar-check"></i> Book This Guide
        </button>
      </div>`).join('');

    // Local food for this site: match by site name/region keywords, else show 3 popular picks
    const siteKeys = (site.name + ' ' + site.location).toLowerCase();
    let localFoods = FOODS.filter(f => {
      const s = f.site.toLowerCase();
      return siteKeys.split(/[\s,·]+/).some(w => w.length > 3 && s.includes(w)) ||
             s.split(/[\s,·]+/).some(w => w.length > 3 && siteKeys.includes(w));
    });
    if (localFoods.length === 0) localFoods = FOODS.slice(0, 3);
    const foodsHTML = localFoods.slice(0, 3).map(foodCardHTML).join('');

    siteDetail.innerHTML = `
      <button class="back-btn" id="backBtn">
        <i class="fa-solid fa-arrow-left"></i> All Heritage Sites
      </button>
      <div class="detail-hero">
        ${imgTag(site)}
        <div class="detail-hero-overlay">
          <h2>${site.name}</h2>
          <span><i class="fa-solid fa-location-dot"></i> ${site.location}</span>
        </div>
      </div>
      <div class="detail-grid">
        <div class="info-card">
          <h3><i class="fa-solid fa-book-open"></i> Historical Significance</h3>
          <p class="history-p">${site.history}</p>
        </div>
        <div class="info-card">
          <h3><i class="fa-solid fa-plane-departure"></i> Traveller Guide</h3>
          <ul class="reco-list">
            <li>
              <div class="reco-key">Best Time to Visit</div>
              <div class="reco-val">${site.reco.time}</div>
            </li>
            <li>
              <div class="reco-key">Entry Fee</div>
              <div class="reco-val">${site.reco.fee}</div>
            </li>
            <li>
              <div class="reco-key">Pro Tip</div>
              <div class="reco-val">${site.reco.tip}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="guides-section">
        <h3><i class="fa-solid fa-user-tie"></i> Local Guides & Travellers</h3>
        <div class="guides-grid">${guidesHTML}</div>
      </div>
      <div class="guides-section" style="margin-top:22px;">
        <h3><i class="fa-solid fa-utensils"></i> Local Food Near ${site.name}</h3>
        <div class="food-grid">${foodsHTML}</div>
      </div>`;

    // Back to grid button
    $('backBtn').addEventListener('click', () => {
      siteDetail.style.display = 'none';
      sitesGrid.style.display  = 'grid';
      document.querySelectorAll('.slide-card').forEach(c  => c.classList.remove('active'));
      document.querySelectorAll('#siteList li').forEach(l => l.classList.remove('active'));
    });

    // Book guide buttons
    siteDetail.querySelectorAll('.book-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalMsg.innerHTML = `You have successfully booked <strong>${btn.dataset.guide}</strong>
          as your expert guide for <strong>${btn.dataset.site}</strong>.
          They will contact you within 2 hours to confirm details and payment!`;
        bookingModal.classList.add('open');
      });
    });
  }

  // ── MODAL ────────────────────────────────────────
  function closeModal() { bookingModal.classList.remove('open'); }
  $('modalClose').addEventListener('click', closeModal);
  $('modalOkBtn').addEventListener('click', closeModal);
  bookingModal.addEventListener('click', e => { if (e.target === bookingModal) closeModal(); });

  // ── DASHBOARD — TOP 5 ────────────────────────────
  function buildRankedList() {
    const list = $('rankedList');
    SITES.slice(0, 5).forEach((s, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="rank-num">${i + 1}</span>
        <span style="flex:1;">${s.name}</span>
        <span style="font-size:.75rem;color:var(--saffron);">
          <i class="fa-solid fa-location-dot"></i> ${s.location}
        </span>`;
      list.appendChild(li);
    });
  }

  // ── TRAVELLERS VIEW ──────────────────────────────
  function buildReviews() {
    REVIEWS.forEach(r => {
      const s = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
      const div = document.createElement('div');
      div.className = 'review-card';
      div.innerHTML = `
        <div class="reviewer-row">
          <img src="${r.av}" alt="${r.name}"
            onerror="this.onerror=null;this.src='https://i.pravatar.cc/150?img=1'">
          <div>
            <h4>${r.name}</h4>
            <span class="visited-tag"><i class="fa-solid fa-location-dot"></i> ${r.visited}</span>
          </div>
        </div>
        <div class="review-stars">${s}</div>
        <p class="review-text">"${r.text}"</p>`;
      reviewsGrid.appendChild(div);
    });
  }

  // ── BOOT ─────────────────────────────────────────
  buildSiteCards();
  buildRankedList();
  buildReviews();
  buildFoodGrid();
  switchView('dashboardView'); // Dashboard is the default screen
});
