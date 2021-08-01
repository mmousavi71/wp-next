import Link from "next/link";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4} from "uuid";
import {stringToNumber} from "../../functions";
import {addToCart} from "../../redux/actions";
import BounceLoader from 'react-spinners/BounceLoader'
import {addToFavorites} from "../../redux/actions/viewer.actions";
import PN from 'persian-number'

export default function ProductItemBox({product}) {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.cart)
    const {loading: loadingFavorite} = useSelector(state => state.viewer.favorite)
    const {authenticate} = useSelector(state => state.auth);

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.databaseId,
    };

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        dispatch(addToFavorites(product.databaseId));
    }

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(productQryInput));
    }

    const RenderProductAttrs = ({attrs}) => {
        if (!attrs.length) return '...'
        const joinString = attrs.map(e => {
            var name = e.name
            var split = name.split("|")

            var nameRes = split.length ? split[0] : e.name

            return nameRes
        }).join(',')

        return joinString
    }

    const RenderImageItem = () => {
        const imageSrc = product.image ? product.image.sourceUrl : '/image/book picture.png';
        const imageAlt = product.image ? product.image.altText : 'Dastanaa';

        return (
            <img
                className="p-sug-box__container__item__book__pic"
                src={imageSrc}
                alt={imageAlt}
            />
        )
    }

    return (
        <Link as={`/product/${product.slug}`}
              href={`/product/[slug]`}
              shallow={true}>
            <a>
                <div className="p-sug-box__container__item">
                    <div className="p-sug-box__container__item__book">
                        <RenderImageItem/>
                        <div className="p-sug-box__container__item__header__icon-wrap">
                            {authenticate && (
                                <div onClick={(e) => handleAddToFavorites(e)}
                                     className="p-sug-box__container__item__header__icon">
                                    {
                                        loadingFavorite ? (
                                            <BounceLoader
                                                loading={true}
                                                size={25}
                                                color="#ffffff"
                                            />
                                        ) : (
                                            <img
                                                className="p-sug-box__container__item__header__icon__img p-sug-box__container__item__header__icon__img--save"
                                                src={`/image/icon/Path 20.svg`}
                                                alt="save"
                                            />
                                        )
                                    }
                                </div>
                            )}
                            <div onClick={(e) => handleAddToCart(e)}
                                 className="p-sug-box__container__item__header__icon">
                                {
                                    loading ? (
                                        <BounceLoader
                                            loading={true}
                                            size={25}
                                            color="#ffffff"
                                        />
                                    ) : (
                                        <img
                                            className="p-sug-box__container__item__header__icon__img p-sug-box__container__item__header__icon__img--bas"
                                            src={`/image/icon/Basket.svg`}
                                            alt="basket"
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="p-sug-box__container__item__header">
                        <strong className="p-sug-box__container__item__header__title">
                            {product.name}
                        </strong>
                    </div>
                    <div className="p-sug-box__container__item__details">
                        <div className="p-sug-box__container__item__details__author">
                            <RenderProductAttrs attrs={product.paWriters.nodes}/>
                        </div>
                        <div className="p-sug-box__container__item__details__publisher">
                            <RenderProductAttrs attrs={product.paPublishers.nodes}/>
                        </div>
                        <div className="p-sug-box__container__item__details__price">
                            <strong style={{flexGrow: "5"}}
                                    className="p-sug-box__container__item__details__price__item">
                                {PN.convertEnToPe(stringToNumber(product.price))}
                            </strong>
                            {product.regularPrice !== product.price && (
                                <>
                                    <strong style={{flexGrow: "1"}}
                                            className="p-sug-box__container__item__details__price__item c-price__discount-oval">
                                        <span>{((product.price - product.regularPrice) / product.price) * 100}%</span>
                                    </strong>
                                    <div style={{flexGrow: "4"}}
                                         className="p-sug-box__container__item__details__price__item p-hero-box__l-col__purchase__price p-hero-box__l-col__purchase__price--off">
                                        {PN.convertEnToPe(stringToNumber(product.regularPrice))}
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}
