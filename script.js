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
  { name:'Arjun Patel', av:'https://i.pravatar.cc/150?img=11', visited:'Taj Mahal', stars:5, text:'Visiting at sunrise was beyond words. The marble changes colour with the light.' },
  { name:'Sneha Sharma', av:'https://i.pravatar.cc/150?img=22', visited:'Ajanta Caves', stars:5, text:'The painted frescos have survived 2,000 years and still radiate life.' },
  { name:'James Mitchell', av:'https://i.pravatar.cc/150?img=16', visited:'Hampi Monuments', stars:5, text:'Cycling through the ruins at sunrise — the most magical morning of my life.' },
  { name:'Priya Nair', av:'https://i.pravatar.cc/150?img=40', visited:'Mahabalipuram', stars:4, text:'The Shore Temple at golden hour is one of the most photogenic scenes ever.' },
  { name:'David Chen', av:'https://i.pravatar.cc/150?img=20', visited:'Ellora Caves', stars:5, text:'The Kailasa Temple defies belief. Carved from a single mountain, top-down.' },
  { name:'Fatima Al-Rashid', av:'https://i.pravatar.cc/150?img=34', visited:'Red Fort', stars:4, text:'The sheer scale of the fort is humbling. The evening show is beautifully narrated.' },
  { name:'Rohan Kapoor', av:'https://i.pravatar.cc/150?img=36', visited:'Rani ki Vav', stars:5, text:'Descending into those levels of sculptures felt like another dimension.' },
  { name:'Maria Gomez', av:'https://i.pravatar.cc/150?img=56', visited:'Churches of Goa', stars:5, text:'The Basilica of Bom Jesus has the most serene atmosphere. Simply humbling.' },
  { name:'Ananya Misra', av:'https://i.pravatar.cc/150?img=44', visited:'Jantar Mantar', stars:4, text:'A scientific marvel masquerading as art. The sundial is accurate to 2 seconds.' },
];

// ── CULTURE DATA ── (cat: dance | music | craft | art)
const CULTURES = [
  { seed:'kathak-up', name:'Kathak Dance', cat:'dance', region:'Agra · Uttar Pradesh',
    img:'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    desc:'Mughal-court storytelling dance of spins, footwork and expressive abhinaya — still taught in Agra gharanas.' },
  { seed:'qawwali-delhi', name:'Qawwali Nights', cat:'music', region:'Delhi · Nizamuddin',
    img:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
    desc:'Soulful Sufi devotional music every Thursday at Hazrat Nizamuddin Dargah, minutes from Humayun-linked Delhi.' },
  { seed:'zardozi-agra', name:'Zardozi Embroidery', cat:'craft', region:'Agra · Uttar Pradesh',
    img:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    desc:'Gold-thread Mughal embroidery on silk and velvet — Agra workshops still supply bridal couture worldwide.' },
  { seed:'marble-agra', name:'Pietra Dura Inlay', cat:'craft', region:'Agra · Taj Ganj',
    img:'https://images.unsplash.com/photo-1564507592208-0270e5a8fc55?w=600&q=80',
    desc:'The same floral stone-inlay craft as the Taj Mahal — watch artisans cut jasper and carnelian by hand.' },
  { seed:'lavani-maha', name:'Lavani Folk Dance', cat:'dance', region:'Maharashtra · Aurangabad',
    img:'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&q=80',
    desc:'High-energy Maharashtrian folk dance with dholki beats — performed at Ellora festival nights.' },
  { seed:'ajanta-art', name:'Ajanta Mural Art', cat:'art', region:'Aurangabad · Maharashtra',
    img:'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&q=80',
    desc:'2,000-year-old Buddhist fresco techniques — natural pigments, lamp-black outlines — revived in local studios.' },
  { seed:'bharata-tn', name:'Bharatanatyam', cat:'dance', region:'Tamil Nadu · Mamallapuram',
    img:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    desc:'Fire-dance of the Chola temples — geometric poses and rhythmic storytelling, performed at the Shore Temple fest.' },
  { seed:'nadaswaram-tn', name:'Nadaswaram & Thavil', cat:'music', region:'Tamil Nadu · Thanjavur',
    img:'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80',
    desc:'Auspicious temple wind music of the Chola heartland — heard at dawn rituals in Brihadeeswara Temple.' },
  { seed:'tanja craft placeholder', name:'Thanjavur Painting', cat:'craft', region:'Thanjavur · Tamil Nadu',
    img:'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
    desc:'Gold-foil deity paintings born under Chola patronage — dense colours, glass beads and gesso relief work.' },
  { seed:'baul-bihar', name:'Baul & Folk Songs', cat:'music', region:'Bodh Gaya · Bihar',
    img:'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80',
    desc:'Mystic minstrel songs of the Gangetic plains — ektara melodies at Bodh Gaya meditation gatherings.' },
  { seed:'madhubani-art', name:'Madhubani Painting', cat:'art', region:'Bihar · Madhubani',
    img:'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80',
    desc:'Geometric fish, peacocks and tree-of-life motifs painted with bamboo sticks — GI-tagged heritage art.' },
  { seed:'kathakali-note', name:'Kathakali & Theyyam', cat:'dance', region:'Goa · Coastal Circuit',
    img:'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    desc:'Though Keralan, these face-painted dance-dramas tour Goa churches circuit every winter festival season.' },
];

// ── FESTIVAL DATA ── (quarter: jan-mar | apr-jun | jul-sep | oct-dec)
const FESTIVALS = [
  { seed:'taj-mahotsav', name:'Taj Mahotsav', place:'Agra, Uttar Pradesh', month:'February', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1564507592208-0270e5a8fc55?w=600&q=80',
    desc:'10-day Mughal-era carnival of crafts, qawwali, kathak and food near the Taj — the best week to visit Agra.' },
  { seed:'holi-agra', name:'Holi in Braj', place:'Mathura · Near Agra', month:'March', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?w=600&q=80',
    desc:'Phoolon-wali Holi and lathmar revelry in Krishna\u2019s land — pair it with a Taj sunrise trip.' },
  { seed:'kite-jaipur', name:'Kite Festival', place:'Jaipur, Rajasthan', month:'January', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=600&q=80',
    desc:'Makar Sankranti skies over the Pink City fill with duelling kites — visible from Jantar Mantar terraces.' },
  { seed:'ellora-fest', name:'Ellora Festival', place:'Aurangabad, Maharashtra', month:'March', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&q=80',
    desc:'Classical dance and music staged against the floodlit Kailasa Temple — a bucket-list night.' },
  { seed:'buddha-purnima', name:'Buddha Purnima', place:'Bodh Gaya, Bihar', month:'May', quarter:'apr-jun',
    img:'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    desc:'Butter-lamp processions and chanting under the Bodhi Tree on the Buddha\u2019s birth-enlightenment day.' },
  { seed:'rath-konark', name:'Chandrabhaga Fair', place:'Konark, Odisha', month:'February', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1601334674063-22684b0d1e57?w=600&q=80',
    desc:'Pilgrims greet the rising sun at the Sun Temple; the Konark Dance Festival follows in December.' },
  { seed:'hampi-utsav', name:'Hampi Utsav', place:'Hampi, Karnataka', month:'January', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=600&q=80',
    desc:'Vijayanagara glory revived — torch-lit processions, puppet shows and concerts among the boulders.' },
  { seed:'mamalla-fest', name:'Mamallapuram Dance Fest', place:'Mahabalipuram, Tamil Nadu', month:'December', quarter:'oct-dec',
    img:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    desc:'Open-air Bharatanatyam and Kuchipudi before the Shore Temple as waves crash behind the stage.' },
  { seed:'diwali-agra', name:'Diwali & Dev Deepawali', place:'Agra · Varanasi circuit', month:'October/November', quarter:'oct-dec',
    img:'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80',
    desc:'The Taj framed by fireworks; extend to Varanasi\u2019s Dev Deepawali ghats lit with a million diyas.' },
  { seed:'goa-carnival', name:'Goa Carnival', place:'Panaji · Old Goa', month:'February', quarter:'jan-mar',
    img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80',
    desc:'Portuguese-era street floats, samba and feni — the liveliest week around the Churches of Goa.' },
  { seed:'teej-jaipur', name:'Teej & Gangaur', place:'Jaipur, Rajasthan', month:'August', quarter:'jul-sep',
    img:'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80',
    desc:'Monsoon queens\u2019 processions with bedecked elephants pass near Jantar Mantar — swing-festival joy.' },
  { seed:'navratri-guj', name:'Navratri Garba', place:'Patan · Gujarat', month:'October', quarter:'oct-dec',
    img:'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?w=600&q=80',
    desc:'Nine nights of garba-dandiya in chaniya cholis — pair with a dawn visit to Rani ki Vav.' },
];

// ── HOTEL DATA ── (price = per night in Rs)
const HOTELS = [
  { seed:'oberoi-amarvilas', name:'The Oberoi Amarvilas', dest:'Agra', area:'Near Taj Mahal', price:28000, rating:4.9, tag:'Luxury Palace',
    img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    amenities:['Taj view rooms','Spa','Fine dining','Pool'] },
  { seed:'tajview-agra', name:'Taj View Homestay', dest:'Agra', area:'Taj Ganj', price:2400, rating:4.4, tag:'Budget',
    img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    amenities:['Rooftop Taj view','Breakfast','WiFi'] },
  { seed:'itc-maurya', name:'ITC Maurya', dest:'Delhi', area:'Chanakyapuri', price:14500, rating:4.8, tag:'Luxury',
    img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
    amenities:['Spa','5 restaurants','Pool','Gym'] },
  { seed:'haveli-delhi', name:'Haveli Dharampura', dest:'Delhi', area:'Chandni Chowk', price:6500, rating:4.6, tag:'Heritage Haveli',
    img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    amenities:['Mughal architecture','Courtyard dining','Guided walks'] },
  { seed:'lemon-aurangabad', name:'Lemon Tree Aurangabad', dest:'Aurangabad', area:'Near Ellora road', price:4200, rating:4.3, tag:'Mid-range',
    img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    amenities:['Pool','Restaurant','WiFi','Parking'] },
  { seed:'toshali-konark', name:'Toshali Sands Resort', dest:'Konark', area:'Marine Drive, Puri-Konark', price:5800, rating:4.4, tag:'Beach Resort',
    img:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
    amenities:['Private beach','Pool','Ayurveda','Kids club'] },
  { seed:'heritage-hampi', name:'Heritage Resort Hampi', dest:'Hampi', area:'Vijayanagara road', price:3600, rating:4.2, tag:'Mid-range',
    img:'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',
    amenities:['Pool','Boulder views','Cycling','Breakfast'] },
  { seed:'mamalla-beach', name:'Mamalla Beach Resort', dest:'Mahabalipuram', area:'Shore Temple road', price:7200, rating:4.5, tag:'Beach Resort',
    img:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
    amenities:['Sea-facing rooms','Pool','Spa','Seafood grill'] },
  { seed:'bodhi-bodhgaya', name:'Bodhi Tree Retreat', dest:'Bodh Gaya', area:'Near Mahabodhi Temple', price:2800, rating:4.3, tag:'Peaceful Stay',
    img:'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
    amenities:['Meditation hall','Veg cafe','Garden','WiFi'] },
  { seed:'samode-jaipur', name:'Samode Haveli', dest:'Jaipur', area:'Old City', price:12000, rating:4.7, tag:'Royal Haveli',
    img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80',
    amenities:['Frescoed suites','Courtyard pool','Folk evenings'] },
  { seed:'zostel-jaipur', name:'Zostel Jaipur', dest:'Jaipur', area:'Near Hawa Mahal', price:900, rating:4.4, tag:'Backpacker',
    img:'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
    amenities:['Dorms','Cafe','Rooftop','Tours desk'] },
  { seed:'taj-goa', name:'Taj Exotica Goa', dest:'Goa', area:'Benaulim, South Goa', price:16500, rating:4.8, tag:'Luxury Resort',
    img:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80',
    amenities:['Beachfront','Infinity pool','Spa','Casino shuttle'] },
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
  // Sidebar buttons, phone bottom-nav buttons + hero quick links all sync here.
  const mbnBtns = document.querySelectorAll('.mbn-btn');
  function switchView(viewId) {
    navBtns.forEach(b => b.classList.toggle('active', b.dataset.view === viewId));
    mbnBtns.forEach(b => b.classList.toggle('active', b.dataset.view === viewId));
    views.forEach(v  => v.classList.toggle('active-view', v.id === viewId));
    sidebarSitesWrap.style.display = viewId === 'exploreView' ? 'flex' : 'none';
    document.body.classList.remove('sidebar-open'); // auto-close phone drawer
  }

  navBtns.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
  mbnBtns.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
  $('goExploreBtn').addEventListener('click', () => switchView('exploreView'));
  const goCompassBtn = $('goCompassBtn');
  if (goCompassBtn) goCompassBtn.addEventListener('click', () => switchView('compassView'));
  const compassQuickBtn = $('compassQuickBtn');
  if (compassQuickBtn) compassQuickBtn.addEventListener('click', () => switchView('compassView'));
  const goFoodBtn = $('goFoodBtn');
  if (goFoodBtn) goFoodBtn.addEventListener('click', () => switchView('foodView'));
  const goCultureBtn = $('goCultureBtn');
  if (goCultureBtn) goCultureBtn.addEventListener('click', () => switchView('cultureView'));
  const goFestivalBtn = $('goFestivalBtn');
  if (goFestivalBtn) goFestivalBtn.addEventListener('click', () => switchView('festivalsView'));
  const goHotelBtn = $('goHotelBtn');
  if (goHotelBtn) goHotelBtn.addEventListener('click', () => switchView('hotelsView'));

  // ── TRAVEL COMPASS ─────────────────────────────────
  // Region of each site (derived from location) + vibe tags for planning.
  const REGION_OF = {
    'taj-mahal':'north','agra-fort':'north','fatehpur-sikri':'north',
    'qutub-minar':'north','red-fort':'north','jantar-mantar':'north',
    'ajanta-caves':'west','ellora-caves':'west','elephanta-caves':'west',
    'champaner':'west','rani-ki-vav':'west',
    'sun-temple':'east','bodh-gaya':'east',
    'khajuraho':'north','sanchi-stupa':'north',
    'hampi':'south','pattadakal':'south','chola-temples':'south',
    'mahabalipuram':'south','goa-churches':'south'
  };
  const VIBE_OF = {
    'taj-mahal':['romantic','family'],'agra-fort':['family','romantic'],
    'fatehpur-sikri':['adventure','family'],'qutub-minar':['family','adventure'],
    'red-fort':['family','spiritual'],'jantar-mantar':['family','adventure'],
    'ajanta-caves':['spiritual','adventure'],'ellora-caves':['spiritual','adventure'],
    'elephanta-caves':['adventure','family'],'champaner':['adventure','spiritual'],
    'rani-ki-vav':['romantic','adventure'],'sun-temple':['spiritual','romantic'],
    'bodh-gaya':['spiritual'],'khajuraho':['romantic','spiritual'],
    'sanchi-stupa':['spiritual','family'],'hampi':['adventure','romantic'],
    'pattadakal':['spiritual','family'],'chola-temples':['spiritual','family'],
    'mahabalipuram':['romantic','family'],'goa-churches':['romantic','spiritual']
  };
  const DIR_DEG = { any:0, north:0, east:90, south:180, west:270 };
  const DIR_LABEL = { any:'Anywhere', north:'North India', east:'East India', south:'South India', west:'West India' };
  let compassDir = 'any', compassDays = 3, compassVibe = 'any';

  function setCompassDir(dir, spinNeedle) {
    compassDir = dir;
    const needle = $('compassNeedle');
    if (needle) {
      const deg = DIR_DEG[dir] !== undefined ? DIR_DEG[dir] : 0;
      needle.style.transition = spinNeedle === false ? 'none' : 'transform 1s cubic-bezier(.2,.8,.25,1.1)';
      needle.style.transform = `translate(-50%,-100%) rotate(${deg + 360}deg)`;
      setTimeout(() => {
        needle.style.transition = 'transform 1s cubic-bezier(.2,.8,.25,1.1)';
        needle.style.transform = `translate(-50%,-100%) rotate(${deg}deg)`;
      }, 30);
      $('compassDeg').textContent = deg + '°';
    }
    if ($('compassDirLabel')) $('compassDirLabel').textContent = DIR_LABEL[dir] || dir;
    document.querySelectorAll('.cdir-btn').forEach(b =>
      b.classList.toggle('picked', b.dataset.dir === dir));
  }
  function planTrail() {
    const box = $('trailResults');
    if (!box) return;
    let pool = SITES.filter(s => compassDir === 'any' ? true : REGION_OF[s.id] === compassDir);
    if (!pool.length) pool = SITES.slice();
    if (compassVibe !== 'any') {
      const matched = pool.filter(s => (VIBE_OF[s.id] || []).includes(compassVibe));
      if (matched.length) pool = matched;
    }
    const picks = pool.slice(0, Math.min(compassDays + 1, pool.length));
    const days = ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7','Day 8'];
    box.innerHTML = `<div class="trail-head"><i class="fa-solid fa-route"></i>
      Your ${picks.length}-stop trail · ${DIR_LABEL[compassDir]} · ${compassVibe} vibe</div>` +
      picks.map((s, i) => `
      <div class="trail-stop">
        <div class="trail-day">${days[i] || ('Day ' + (i + 1))}</div>
        <div class="trail-thumb">${imgTag(s)}</div>
        <div style="flex:1;">
          <strong>${s.name}</strong>
          <div class="booking-sub">${s.location} · Best: ${s.reco.time}</div>
        </div>
        <button class="trail-go" data-id="${s.id}" title="Open site"><i class="fa-solid fa-arrow-right"></i></button>
      </div>`).join('') +
      `<button class="btn-primary compass-plan-btn" id="trailToHotels" style="margin-top:12px;background:var(--gold);">
        <i class="fa-solid fa-hotel"></i> Find Stays For This Trail</button>`;
    box.querySelectorAll('.trail-go').forEach(b =>
      b.addEventListener('click', () => { switchView('exploreView'); openSite(b.dataset.id); }));
    const th = $('trailToHotels');
    if (th) th.addEventListener('click', () => switchView('hotelsView'));
  }
  // Compass dial buttons + chips + spin
  document.querySelectorAll('.cdir-btn').forEach(b =>
    b.addEventListener('click', () => setCompassDir(b.dataset.dir)));
  const daysChips = $('daysChips'), vibeChips = $('vibeChips');
  if (daysChips) daysChips.querySelectorAll('.chip').forEach(c =>
    c.addEventListener('click', () => {
      daysChips.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      compassDays = parseInt(c.dataset.days, 10) || 3;
    }));
  if (vibeChips) vibeChips.querySelectorAll('.chip').forEach(c =>
    c.addEventListener('click', () => {
      vibeChips.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      compassVibe = c.dataset.vibe || 'any';
    }));
  const planBtn = $('compassPlanBtn');
  if (planBtn) planBtn.addEventListener('click', planTrail);
  const spinBtn = $('compassSpin');
  if (spinBtn) spinBtn.addEventListener('click', () => {
    const dirs = ['north','east','south','west'];
    setCompassDir(dirs[Math.floor(Math.random() * dirs.length)]);
    setTimeout(planTrail, 700);
  });
  // Ticks around the dial (radius follows dial size: 47% of dial)
  const ticks = $('compassTicks');
  if (ticks) {
    const dial = $('compassDial');
    const radius = dial ? Math.round(dial.offsetWidth * 0.44) : 110;
    for (let i = 0; i < 36; i++) {
      const t = document.createElement('span');
      t.className = 'tick' + (i % 9 === 0 ? ' major' : '');
      t.style.transform = `rotate(${i * 10}deg) translateY(${-radius}px)`;
      ticks.appendChild(t);
    }
  }
  // ── PHONE DRAWER ───────────────────────────────────
  const menuBtn = $('menuBtn'), backdrop = $('sidebarBackdrop');
  if (menuBtn) menuBtn.addEventListener('click', () =>
    document.body.classList.toggle('sidebar-open'));
  if (backdrop) backdrop.addEventListener('click', () =>
    document.body.classList.remove('sidebar-open'));
  // ── PHONE COMPASS SENSOR (real heading where supported)
  try {
    const needle = $('compassNeedle');
    const degEl = $('compassDeg');
    const onHeading = h => {
      if (h === null || h === undefined || compassDir !== 'any') return;
      if (needle && !document.body.classList.contains('user-picked')) {
        needle.style.transform = `translate(-50%,-100%) rotate(${-h}deg)`;
        if (degEl) degEl.textContent = Math.round(h) + '°';
      }
    };
    if ('ondeviceorientationabsolute' in window || 'ondeviceorientation' in window) {
      window.addEventListener('deviceorientationabsolute', e => {
        if (e.alpha !== null) onHeading(360 - e.alpha);
      }, true);
      window.addEventListener('deviceorientation', e => {
        if (e.webkitCompassHeading !== undefined) onHeading(e.webkitCompassHeading);
      }, true);
    }
    document.querySelectorAll('.cdir-btn').forEach(b =>
      b.addEventListener('click', () => document.body.classList.add('user-picked')));
  } catch (e) {}

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
  document.querySelectorAll('#foodFilterRow .food-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#foodFilterRow .food-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      foodFilter = btn.dataset.filter;
      buildFoodGrid();
    });
  });

  // ── CULTURE GRID + FILTERS ─────────────────────────
  let cultureFilter = 'all';
  function buildCultureGrid() {
    const grid = $('cultureGrid');
    if (!grid || typeof CULTURES === 'undefined') return;
    const items = CULTURES.filter(c => cultureFilter === 'all' ? true : c.cat === cultureFilter);
    grid.innerHTML = items.length ? items.map(c => `
      <div class="culture-card">
        <div class="culture-img">
          <img src="${c.img}" alt="${c.name}" loading="lazy"
            onerror="if(!this.dataset.f1){this.dataset.f1=1;this.src='https://picsum.photos/seed/${c.seed}/600/400';}">
          <span class="food-cat-badge">${c.cat}</span>
        </div>
        <div class="food-info">
          <h3>${c.name}</h3>
          <div class="food-site"><i class="fa-solid fa-location-dot"></i> ${c.region}</div>
          <p class="food-desc">${c.desc}</p>
        </div>
      </div>`).join('')
      : '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:30px;">Nothing here yet.</p>';
  }
  document.querySelectorAll('#cultureFilterRow .food-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#cultureFilterRow .food-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cultureFilter = btn.dataset.filter;
      buildCultureGrid();
    });
  });

  // ── FESTIVAL TIMELINE + FILTERS ────────────────────
  let festFilter = 'all';
  function buildFestivalGrid() {
    const grid = $('festivalGrid');
    if (!grid || typeof FESTIVALS === 'undefined') return;
    const items = FESTIVALS.filter(f => festFilter === 'all' ? true : f.quarter === festFilter);
    grid.innerHTML = items.length ? items.map(f => `
      <div class="fest-card">
        <div class="fest-img">
          <img src="${f.img}" alt="${f.name}" loading="lazy"
            onerror="if(!this.dataset.f1){this.dataset.f1=1;this.src='https://picsum.photos/seed/${f.seed}/400/400';}">
          <span class="fest-month"><i class="fa-solid fa-calendar-day"></i> ${f.month}</span>
        </div>
        <div class="fest-info">
          <h3>${f.name}</h3>
          <div class="food-site"><i class="fa-solid fa-location-dot"></i> ${f.place}</div>
          <p class="food-desc">${f.desc}</p>
        </div>
      </div>`).join('')
      : '<p style="color:var(--muted);text-align:center;padding:30px;">No festivals in this quarter.</p>';
  }
  document.querySelectorAll('#festivalFilterRow .food-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#festivalFilterRow .food-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      festFilter = btn.dataset.filter;
      buildFestivalGrid();
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
      </div>
      <div class="guides-section detail-cta-row">
        <button class="btn-primary" data-goto="hotelsView"><i class="fa-solid fa-hotel"></i> Find Stays Near ${site.name}</button>
        <button class="btn-primary" data-goto="festivalsView" style="background:var(--gold);"><i class="fa-solid fa-wand-magic-sparkles"></i> Festivals Here</button>
        <button class="btn-primary" data-goto="cultureView" style="background:#7c2d12;"><i class="fa-solid fa-masks-theater"></i> Local Culture</button>
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

    // Detail-page cross links to new sections
    siteDetail.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.goto));
    });
  }

  // ── HOTELS: SEARCH + BOOKING ENGINE (part 1: grid) ─
  const inr = n => 'Rs.' + n.toLocaleString('en-IN');
  function nightsBetween(a, b) {
    if (!a || !b) return 0;
    const ms = new Date(b) - new Date(a);
    return Math.round(ms / 86400000);
  }
  function hotelCardHTML(h) {
    const stars = '★'.repeat(Math.round(h.rating)) + '☆'.repeat(5 - Math.round(h.rating));
    return `<div class="hotel-card">
      <div class="hotel-img">
        <img src="${h.img}" alt="${h.name}" loading="lazy"
          onerror="if(!this.dataset.f1){this.dataset.f1=1;this.src='https://picsum.photos/seed/${h.seed}/600/400';}">
        <span class="hotel-tag">${h.tag}</span>
        <span class="hotel-rating"><i class="fa-solid fa-star"></i> ${h.rating}</span>
      </div>
      <div class="hotel-info">
        <h3>${h.name}</h3>
        <div class="food-site"><i class="fa-solid fa-location-dot"></i> ${h.area} · ${h.dest}</div>
        <div class="hotel-stars">${stars}</div>
        <div class="hotel-amenities">${h.amenities.map(a => `<span><i class="fa-solid fa-check"></i> ${a}</span>`).join('')}</div>
        <div class="hotel-meta">
          <div><span class="hotel-price">${inr(h.price)}</span><span class="hotel-per"> / night</span></div>
          <button class="book-btn hotel-book-btn" data-seed="${h.seed}"><i class="fa-solid fa-bed"></i> Book Now</button>
        </div>
      </div>
    </div>`;
  }
  function buildHotelGrid() {
    const grid = $('hotelGrid');
    if (!grid || typeof HOTELS === 'undefined') return;
    const dest = $('hotelDest') ? $('hotelDest').value : 'all';
    const list = HOTELS.filter(h => dest === 'all' ? true : h.dest === dest);
    const n = nightsBetween($('hotelCheckin').value, $('hotelCheckout').value);
    $('hotelResultsLine').textContent = list.length
      ? `${list.length} stay(s) found${dest !== 'all' ? ' in ' + dest : ''}${n > 0 ? ` · ${n} night(s)` : ''}`
      : 'No stays found for this destination.';
    grid.innerHTML = list.length ? list.map(hotelCardHTML).join('')
      : '<p class="empty-note">Try another destination.</p>';
    grid.querySelectorAll('.hotel-book-btn').forEach(btn => {
      btn.addEventListener('click', () => openHotelModal(btn.dataset.seed));
    });
  }
  function fillHotelDests() {
    const sel = $('hotelDest');
    if (!sel || typeof HOTELS === 'undefined') return;
    [...new Set(HOTELS.map(h => h.dest))].sort().forEach(d => {
      const o = document.createElement('option');
      o.value = d; o.textContent = d;
      sel.appendChild(o);
    });
  }
  // ── HOTEL BOOKINGS (saved in browser) ──────────────
  function getBookings() {
    try { return JSON.parse(localStorage.getItem('heritageBookings') || '[]'); }
    catch (e) { return []; }
  }
  function saveBookings(b) {
    try { localStorage.setItem('heritageBookings', JSON.stringify(b)); } catch (e) {}
  }
  function renderBookings() {
    const box = $('bookingsList');
    if (!box) return;
    const all = getBookings();
    $('bookingCount').textContent = all.length;
    box.innerHTML = all.length ? all.map(b => `
      <div class="booking-row">
        <div class="booking-ic"><i class="fa-solid fa-hotel"></i></div>
        <div style="flex:1;">
          <strong>${b.hotel}</strong>
          <div class="booking-sub">${b.checkin} to ${b.checkout} · ${b.rooms} room(s) · ${b.guests} guest(s)</div>
          <div class="booking-sub">Booked by ${b.name} · ID ${b.id}</div>
        </div>
        <div class="booking-total">${inr(b.total)}</div>
        <button class="booking-cancel" data-id="${b.id}"><i class="fa-solid fa-trash"></i></button>
      </div>`).join('')
      : '<p class="empty-note">No bookings yet — your confirmed stays will appear here.</p>';
    box.querySelectorAll('.booking-cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        saveBookings(getBookings().filter(b => b.id !== btn.dataset.id));
        renderBookings();
      });
    });
  }
  // ── HOTEL MODAL: open / live total / confirm ───────
  let currentHotel = null;
  function hotelTotal() {
    if (!currentHotel) return 0;
    const n = nightsBetween($('bookCheckin').value, $('bookCheckout').value) || 1;
    const rooms = parseInt($('bookRooms').value || '1', 10);
    return currentHotel.price * n * rooms;
  }
  function refreshHotelTotal() {
    $('hotelTotal').textContent = currentHotel ? inr(hotelTotal()) : '—';
  }
  function openHotelModal(seed) {
    currentHotel = HOTELS.find(h => h.seed === seed);
    if (!currentHotel) return;
    $('hotelSuccess').style.display = 'none';
    document.querySelector('.hotel-form').style.display = 'block';
    $('hotelModalTitle').textContent = currentHotel.name;
    $('hotelModalSummary').innerHTML =
      `<span><i class="fa-solid fa-location-dot"></i> ${currentHotel.area} · ${currentHotel.dest}</span>
       <span><i class="fa-solid fa-star"></i> ${currentHotel.rating} · ${inr(currentHotel.price)}/night</span>`;
    $('hotelErr').textContent = '';
    if ($('hotelCheckin').value) $('bookCheckin').value = $('hotelCheckin').value;
    if ($('hotelCheckout').value) $('bookCheckout').value = $('hotelCheckout').value;
    refreshHotelTotal();
    $('hotelModal').classList.add('open');
  }
  ['bookCheckin', 'bookCheckout', 'bookRooms'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('change', refreshHotelTotal);
  });
  function closeHotelModal() { $('hotelModal').classList.remove('open'); }
  $('hotelModalClose').addEventListener('click', closeHotelModal);
  $('hotelDoneBtn').addEventListener('click', closeHotelModal);
  $('hotelModal').addEventListener('click', e => { if (e.target === $('hotelModal')) closeHotelModal(); });
  $('hotelConfirmBtn').addEventListener('click', () => {
    const name = $('guestName').value.trim();
    const phone = $('guestPhone').value.trim();
    const ci = $('bookCheckin').value, co = $('bookCheckout').value;
    const err = $('hotelErr');
    if (!name) { err.textContent = 'Please enter your full name.'; return; }
    if (!phone || phone.replace(/\D/g, '').length < 8) { err.textContent = 'Please enter a valid phone number.'; return; }
    if (!ci || !co || nightsBetween(ci, co) <= 0) { err.textContent = 'Please pick valid check-in / check-out dates.'; return; }
    err.textContent = '';
    const b = {
      id: 'HI-' + Date.now().toString(36).toUpperCase(),
      hotel: currentHotel.name, name, phone,
      checkin: ci, checkout: co,
      rooms: $('bookRooms').value, guests: $('bookGuests').value,
      total: hotelTotal()
    };
    const all = getBookings(); all.unshift(b); saveBookings(all);
    renderBookings();
    document.querySelector('.hotel-form').style.display = 'none';
    $('hotelSuccess').style.display = 'block';
    $('hotelBookingId').textContent = b.id;
    $('hotelSuccessMsg').innerHTML = `<strong>${b.hotel}</strong><br>${b.checkin} to ${b.checkout} · ${b.rooms} room(s) · Total <strong>${inr(b.total)}</strong>`;
  });
  if ($('hotelSearchBtn')) $('hotelSearchBtn').addEventListener('click', buildHotelGrid);
  if ($('hotelDest')) $('hotelDest').addEventListener('change', buildHotelGrid);
  // __HOTEL_PART2__

  // ── GUIDE BOOKING MODAL (existing feature) ─────────
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
  buildCultureGrid();
  buildFestivalGrid();
  fillHotelDests();
  buildHotelGrid();
  renderBookings();
  // Default search dates: today + 7 / + 9
  try {
    const t = new Date(); const f = d => d.toISOString().slice(0, 10);
    const ci = new Date(t); ci.setDate(ci.getDate() + 7);
    const co = new Date(t); co.setDate(co.getDate() + 9);
    if ($('hotelCheckin') && !$('hotelCheckin').value) $('hotelCheckin').value = f(ci);
    if ($('hotelCheckout') && !$('hotelCheckout').value) $('hotelCheckout').value = f(co);
    if ($('bookCheckin')) $('bookCheckin').value = f(ci);
    if ($('bookCheckout')) $('bookCheckout').value = f(co);
  } catch (e) {}
  buildHotelGrid();
  switchView('dashboardView'); // Dashboard is the default screen
});
