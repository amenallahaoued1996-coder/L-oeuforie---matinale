import { motion } from "motion/react";
import { Coffee, Utensils, Clock, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("breakfast");

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-cream/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">L'Oeuforie Matinale</h1>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#menu" className="hover:text-brand-olive transition-colors">Menu</a>
            <a href="#about" className="hover:text-brand-olive transition-colors">À Propos</a>
            <a href="#gallery" className="hover:text-brand-olive transition-colors">Galerie</a>
            <a href="#contact" className="hover:text-brand-olive transition-colors">Contact</a>
          </div>
          <a 
            href="tel:5143323332" 
            className="bg-brand-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Appeler
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-olive uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Bienvenue à Montréal
            </span>
            <h2 className="text-6xl md:text-8xl font-light leading-tight mb-8">
              L'art du <span className="italic">déjeuner</span> parfait.
            </h2>
            <p className="text-lg text-brand-ink/70 max-w-md mb-10 leading-relaxed">
              Un restaurant de style décontracté où les œufs sont à l'honneur. Savourez nos galettes, nos crêpes aux pommes et notre café fraîchement torréfié.
            </p>
            <div className="flex space-x-4">
              <a href="#menu" className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                Voir le Menu
              </a>
              <a href="#contact" className="border border-brand-olive text-brand-olive px-8 py-4 rounded-full font-medium hover:bg-brand-olive/5 transition-all">
                Nous Trouver
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepgTTh9HP4zdA-y52yV_ItyGEPCkPNBFMvxNUW1G4pO5yI2A7CIt0VIw0eCzAoQZ_ZQDVesVs4n23eL5D5hdj9CnuE3qEn1XXbrb1iVWc0hXHzjBvvLDilyBQ_IG8GgRckImvbF=w640-h640-n-k-no" 
              alt="Breakfast at L'Oeuforie Matinale" 
              className="rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-olive/10 p-3 rounded-full">
                  <Clock className="text-brand-olive w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-ink/50 font-bold">Ouvert Aujourd'hui</p>
                  <p className="font-serif text-xl">6:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl mb-4">Galerie</h2>
              <p className="text-brand-ink/60">Un aperçu de nos créations culinaires.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqQWlfL25MDWOBYKtVS2l73XdSW16Cw7QY4ocGCxpFvw4FcFoYWW2-h5-oFSlgYPlz2BbjTofOaBB8dK36QtxTvgg5Wi_MgGioUhWe6ErhGVZC06qOgpcRLVFHeAK8GS2YP_Kny=w640-h640-n-k-no" 
                alt="Nos œufs signature" 
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-serif text-lg italic">Nos œufs signature</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl mt-8">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwVh6i9kEsvMhsitTcgj4S2VX5ksR3OnhCdI0to1HtiII_eU7gVzqsjvd_uica1HV6Xk5o8vfDL3UWKOrLAvymsrUGrqRgE18yYyT12XruTUwFE9yRn4LXouT9uf0mEXwWqofA=w640-h640-n-k-no" 
                alt="Galette bretonne" 
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-serif text-lg italic">La galette complète</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepgTTh9HP4zdA-y52yV_ItyGEPCkPNBFMvxNUW1G4pO5yI2A7CIt0VIw0eCzAoQZ_ZQDVesVs4n23eL5D5hdj9CnuE3qEn1XXbrb1iVWc0hXHzjBvvLDilyBQ_IG8GgRckImvbF=w640-h640-n-k-no" 
                alt="Assiette déjeuner complète" 
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-serif text-lg italic">L'Oeuforie Matinale Spécial</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl mt-8">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwere84-xh46-C61zFkPamosRNPDOoto-NChQEdglWL0BMBZYoUX1StNR0JAIVyn_exG7GSgq53avfqbs0ksIWllriVPURD3azBfv6hAMqpVhXe2MWg-cporabDmb708d4vSTaI-y=w640-h640-n-k-no" 
                alt="Crêpe gourmande" 
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-serif text-lg italic">Douceur aux pommes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6">Notre Menu</h2>
            <div className="flex justify-center space-x-8 border-b border-black/5">
              <button 
                onClick={() => setActiveTab("breakfast")}
                className={`pb-4 text-sm uppercase tracking-widest font-semibold transition-all ${activeTab === "breakfast" ? "border-b-2 border-brand-olive text-brand-olive" : "text-brand-ink/40 hover:text-brand-ink"}`}
              >
                Déjeuner
              </button>
              <button 
                onClick={() => setActiveTab("lunch")}
                className={`pb-4 text-sm uppercase tracking-widest font-semibold transition-all ${activeTab === "lunch" ? "border-b-2 border-brand-olive text-brand-olive" : "text-brand-ink/40 hover:text-brand-ink"}`}
              >
                Dîner
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            {activeTab === "breakfast" ? (
              <>
                <MenuItem 
                  title="Œufs Bénédictine Classiques" 
                  price="16.50" 
                  description="Deux œufs pochés, jambon fumé, sauce hollandaise maison sur muffin anglais." 
                />
                <MenuItem 
                  title="Crêpes aux Fruits Frais" 
                  price="14.95" 
                  description="Trois grandes crêpes servies avec une montagne de fruits de saison et sirop d'érable." 
                />
                <MenuItem 
                  title="L'Oeuforie Spécial" 
                  price="18.25" 
                  description="Trois œufs, deux choix de viandes, fèves au lard, patates maison et rôties." 
                />
                <MenuItem 
                  title="Pain Doré Brioché" 
                  price="15.50" 
                  description="Tranches épaisses de brioche, cannelle, sucre à la crème et petits fruits." 
                />
                <MenuItem 
                  title="Omelette du Jardin" 
                  price="15.95" 
                  description="Poivrons, oignons, champignons, épinards et fromage cheddar fort." 
                />
                <MenuItem 
                  title="Gaufre Belge" 
                  price="13.50" 
                  description="Gaufre croustillante, crème fouettée, chocolat belge et fraises." 
                />
              </>
            ) : (
              <>
                <MenuItem 
                  title="Burger L'Oeuforie" 
                  price="17.95" 
                  description="Bœuf Angus, bacon, œuf miroir, fromage suisse et oignons caramélisés." 
                />
                <MenuItem 
                  title="Club Sandwich Traditionnel" 
                  price="16.50" 
                  description="Poulet grillé, bacon, laitue, tomate, servi avec frites et salade de chou." 
                />
                <MenuItem 
                  title="Poutine Déjeuner" 
                  price="15.25" 
                  description="Frites maison, fromage en grain, sauce brune et un œuf poché." 
                />
                <MenuItem 
                  title="Salade César au Poulet" 
                  price="16.95" 
                  description="Laitue romaine, croûtons maison, parmesan et poitrine de poulet grillée." 
                />
                <MenuItem 
                  title="Sandwich au Steak" 
                  price="18.50" 
                  description="Fines tranches de bœuf, poivrons sautés, fromage fondu sur pain baguette." 
                />
                <MenuItem 
                  title="Fish & Chips" 
                  price="19.25" 
                  description="Filet de morue pané à la bière, servi avec frites et sauce tartare." 
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqQWlfL25MDWOBYKtVS2l73XdSW16Cw7QY4ocGCxpFvw4FcFoYWW2-h5-oFSlgYPlz2BbjTofOaBB8dK36QtxTvgg5Wi_MgGioUhWe6ErhGVZC06qOgpcRLVFHeAK8GS2YP_Kny=w640-h640-n-k-no" alt="Nos œufs signature" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwVh6i9kEsvMhsitTcgj4S2VX5ksR3OnhCdI0to1HtiII_eU7gVzqsjvd_uica1HV6Xk5o8vfDL3UWKOrLAvymsrUGrqRgE18yYyT12XruTUwFE9yRn4LXouT9uf0mEXwWqofA=w640-h640-n-k-no" alt="Galette bretonne" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl mb-8">Une tradition matinale à Montréal</h2>
            <p className="text-lg text-brand-ink/70 mb-6 leading-relaxed">
              Découvrez notre ambiance décontractée, parfaite pour vos matinées et après-midis. Spécialistes des plats à base d'œufs, nous proposons également des galettes savoureuses et nos célèbres crêpes aux pommes.
            </p>
            <p className="text-lg text-brand-ink/70 mb-10 leading-relaxed">
              Que vous soyez ici pour un café rapide ou un brunch familial prolongé, notre équipe vous accueille avec le sourire et des plats qui réchauffent le cœur.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl font-serif">10+</p>
                <p className="text-xs uppercase tracking-widest text-brand-ink/50">Années d'expérience</p>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div className="text-center">
                <p className="text-3xl font-serif">500+</p>
                <p className="text-xs uppercase tracking-widest text-brand-ink/50">Avis Positifs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-brand-cream p-10 rounded-3xl">
              <MapPin className="text-brand-olive w-8 h-8 mb-6" />
              <h3 className="text-2xl mb-4">Emplacement</h3>
              <p className="text-brand-ink/70 leading-relaxed">
                12150 Boul Laurentien<br />
                Montréal, QC H4K 1N1<br />
                Canada
              </p>
              <a 
                href="https://www.google.com/maps/place/Restaurant+L'Oeuforie+Matinale/@45.5447491,-73.6772033,17z" 
                target="_blank" 
                className="mt-6 inline-block text-brand-olive font-medium border-b border-brand-olive"
              >
                Obtenir l'itinéraire
              </a>
            </div>
            <div className="bg-brand-cream p-10 rounded-3xl">
              <Phone className="text-brand-olive w-8 h-8 mb-6" />
              <h3 className="text-2xl mb-4">Réservations</h3>
              <p className="text-brand-ink/70 leading-relaxed mb-2">
                Pour emporter ou réserver une table :
              </p>
              <p className="text-2xl font-serif">(514) 332-3332</p>
            </div>
            <div className="bg-brand-cream p-10 rounded-3xl">
              <Clock className="text-brand-olive w-8 h-8 mb-6" />
              <h3 className="text-2xl mb-4">Heures d'ouverture</h3>
              <ul className="space-y-2 text-brand-ink/70">
                <li className="flex justify-between"><span>Lundi - Vendredi</span> <span>6:00 - 15:00</span></li>
                <li className="flex justify-between font-bold text-brand-ink"><span>Samedi - Dimanche</span> <span>7:00 - 15:00</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5 bg-brand-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-xl font-semibold mb-2">L'Oeuforie Matinale</h1>
            <p className="text-sm text-brand-ink/50">© 2024 Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/restaurantloeuforiematinale" target="_blank" className="hover:text-brand-olive transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-brand-olive transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuItem({ title, price, description }: { title: string, price: string, description: string }) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-2xl group-hover:text-brand-olive transition-colors">{title}</h3>
        <div className="flex-grow border-b border-dotted border-black/10 mx-4"></div>
        <span className="font-serif text-xl">${price}</span>
      </div>
      <p className="text-brand-ink/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
