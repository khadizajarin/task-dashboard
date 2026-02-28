import { Package } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
}

const categoryColors: Record<string, string> = {
  subscription: "bg-primary",
  addon: "bg-warning",
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 animate-fade-in" style={{ animationDelay: "350ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Products</h3>
        <span className="text-xs text-muted-foreground">{products.length} items</span>
      </div>
      <div className="space-y-3">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="flex items-center gap-3">
            <div className={`w-8 h-8 ${categoryColors[product.category] || "bg-info"} rounded-lg flex items-center justify-center`}>
              <Package className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.sales} sales · ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
