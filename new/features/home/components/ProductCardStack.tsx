// author: Khoa Phan <https://www.pldkhoa.dev>

"use client"

import { useState } from "react"

import StackingCards, {
    StackingCardItem,
} from "./StackCard"

type ProductItem = {
    url: string,
    title: string,
    logo: string,
    subtitle: string,
}

type Product = {
    data: ProductItem
}

interface StackingCardsProps {
    products: Product[],
}

export default function StackingCardsDemo({ products }: StackingCardsProps) {
    const [container, setContainer] = useState<HTMLElement | null>(null)

    return (
        <StackingCards
            totalCards={products.length}
            scrollOptons={{ container: { current: container } }}
        >
            {products.map((product, index) => {
                console.log(product)
                return (
                    <StackingCardItem key={index} index={index} className="h-[620px]">
                        <div
                            class="grid sm:grid-cols-2 p-2 ring-base-200 duration-300 group shadow rounded-3xl hover:shadow-light bg-linear-45 from-base-50  to-base-100 section-card"
                        >
                            <div
                                class={"flex flex-col justify-between min-h-72 p-4 rounded-2xl relative overflow-hidden h-full rounded-tr-none rounded-br-none " + product.data.bgColor}
                            >
                                <div class="flex justify-between items-center">
                                    <h3
                                        class="font-medium text-base-900 uppercase"
                                    >
                                        {product.data.title}
                                    </h3>
                                    <div
                                        class="rounded-full bg-base-50 p-1 text-base-900 group-hover:-rotate-45 duration-300"
                                    >
                                        <svg
                                            class="size-4"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="sm:-mb-20 sm:group-hover:mb-0 gap-12 duration-300 flex flex-col items-start justify-between"
                                >
                                    <p
                                        class=" text-base-600 leading-6 mt-8 text-balance"
                                    >
                                        {product.data.subtitle}
                                    </p>
                                    <a href={product.data.url} title={product.data.title}
                                    >Read more
                                    </a>
                                </div>
                            </div>
                            <img
                                src={product.data.image.url}
                                alt={product.data.title}
                                width={500}
                                class="w-full h-full object-cover rounded-2xl order-first sm:order-last rounded-image-product"
                            />
                        </div>

                    </StackingCardItem>
                )
            })}
        </StackingCards>
    )
}
