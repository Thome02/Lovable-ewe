
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  {
    id: 1,
    title: "Filtro de Óleo Premium",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Filtros",
  },
  {
    id: 2,
    title: "Pastilha de Freio",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1589147437556-43f4f7a04eb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Freios",
  },
  {
    id: 3,
    title: "Óleo Motor 5W30",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1612207147530-f22841b5e27b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Lubrificantes",
  },
  {
    id: 4,
    title: "Kit Correia Dentada",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Motor",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Produtos em Destaque
            </h2>
            <p className="mt-2 text-gray-600">
              Confira nossa seleção de peças mais populares
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="bg-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Qualidade e Confiança em Cada Peça
            </h2>
            <p className="text-lg mb-8">
              Trabalhamos apenas com as melhores marcas e fornecedores do mercado,
              garantindo a qualidade e procedência de todas as nossas peças.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Conheça Nossa História
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
