import styled from "styled-components";
import { data } from "../../../assets/data";
import ProductDescription from "../../../reusable-ui/product_description/ProductDescription";

export default function ContentCategory({ category }: { category?: string }) {

    let order = true;

    return (
        <HeadphoneCategoryStyled>
            {data.map((product) => {
                order = order ? false : true;
                if (product.category === category) {
                    return <ProductDescription
                        key={product.id}
                        ad={product.ad}
                        description={product.description ?? "No description"}
                        image={{
                            mobile: product.categoryImage.mobile,
                            tablet: product.categoryImage.tablet,
                            desktop: product.categoryImage.desktop
                        }}
                        title={product.name}
                        button={{ label: "see product", version: 1 }}
                        destination={`/product-detail/${product.slug}`}
                        onLeft={order}
                    />
                }
            })}
        </HeadphoneCategoryStyled>
    )
}

const HeadphoneCategoryStyled = styled.section`
    display: grid;
    gap: 160px;
`;