import styled from "styled-components";
import { data } from "../../../assets/data";
import ProductDescription from "../../../reusable-ui/product_description/ProductDescription";
import { useNavigate } from "react-router-dom";

export default function ContentCategory({ category }: { category?: string }) {

    let order = true;
    const navigate = useNavigate()

    const navigation = (destination: string) => {
        window.scrollTo(0, 0);
        navigate(`/product-detail/${destination}`)
    }

    type objectCategory = {
        id: number,
        name: string,
        category: string,
        ad: boolean,
        description: string,
        categoryImage: {
            mobile: string,
            tablet: string,
            desktop: string
        },
        slug: string
    }

    const EMPTY_OBJECT = {
        id: 0,
        name: "",
        category: "",
        ad: true,
        description: "",
        categoryImage: {
            mobile: "",
            tablet: "",
            desktop: ""
        },
        slug: ""

    }
    const list: objectCategory[] = []

    data.map((product) => {
        if (product.category === category) {
            const addproduct = { ...EMPTY_OBJECT }
            addproduct.id = product.id
            addproduct.name = product.name
            addproduct.category = product.category ?? ""
            addproduct.ad = product.ad ?? false
            addproduct.description = product.description ?? ""
            addproduct.categoryImage = product.categoryImage
            addproduct.slug = product.slug ?? ""
            addproduct.ad ? list.unshift(addproduct) : list.push(addproduct)
        }
    })

    console.log(list)


    return (
        <HeadphoneCategorieStyled>
            {list.map((product) => {
                order = order ? false : true;
                if (product.category === category) {
                    return <ProductDescription
                        key={product.id}
                        ad={product.ad}
                        description={product.description}
                        image={{
                            mobile: product.categoryImage.mobile,
                            tablet: product.categoryImage.tablet,
                            desktop: product.categoryImage.desktop
                        }}
                        title={product.name}
                        button={{ label: "see product", version: 1 }}
                        onClick={() => navigation(product.slug)}
                        onLeft={order}
                    />
                }
            })}

        </HeadphoneCategorieStyled>
    )
}


const HeadphoneCategorieStyled = styled.section`
  display: grid;
  gap: 160px;
`;