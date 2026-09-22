import { products } from '@/lib/content';

export default function ProductsSection() {
  const ticker = [...products, ...products];

  return (
    <section aria-labelledby="products-heading" className="mt-16 px-3 sm:mt-28 sm:px-4">
      <div className="overflow-hidden rounded-[20px] bg-navy py-9 sm:rounded-[26px] sm:py-16">
        <h2
          id="products-heading"
          className="mx-5 mb-8 max-w-[24ch] text-[clamp(24px,3.2vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white sm:mx-11"
        >
          Thirteen products, <span className="font-serif font-normal italic">one team behind them</span>
        </h2>

        <div className="group overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
            {ticker.map((product, index) => (
              <span
                key={`${product.name}-${index}`}
                className="inline-flex items-center gap-[22px] pr-[22px] text-[clamp(17px,1.9vw,27px)] tracking-[-0.03em] whitespace-nowrap text-white/60"
              >
                {product.name}
                <span style={{ background: product.accent }} className="block h-1.5 w-1.5 flex-none rounded-full" />
              </span>
            ))}
          </div>
        </div>

        <ul className="mx-5 mt-8 grid list-none grid-cols-1 gap-px p-0 sm:mx-11 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.name}
              className="flex min-w-0 flex-col gap-2 bg-navy p-5 outline outline-white/10 transition-colors duration-400 hover:bg-[#22242A]"
            >
              <span style={{ background: product.accent }} aria-hidden="true" className="block h-[7px] w-[7px] rounded-full" />
              <h3 className="text-[15.5px] font-normal tracking-[-0.02em] text-white">{product.name}</h3>
              <p className="text-[12.5px] leading-[1.45] text-white/60">{product.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
