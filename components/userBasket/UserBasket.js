import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stringToNumber } from "../../functions";
import UserAddressAddModal from "../userAddressModal/UserAddressAddModal";
import ShippingBasket from "./ShippingBasket";
import { getValueByKey } from "../../functions";
import { setBillingInput } from "../../redux/actions/checout.actions";
import ShippingDateTime from "./ShippingDateTime";
import ApplyCoupon from "./ApplyCoupon";
import WalletCredit from "./WalletCredit";
import axios from "axios";

export default function UserBasket(props) {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const [modalShow, setModalShow] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const { customer } = useSelector(state => state.customer)
  const { addresses, active } = useSelector(state => state.customer.address)
  const { region } = useSelector(state => state.local)

  useEffect(() => {
    if (!active) return false

    const billingAddress = getValueByKey(addresses, active)

    var state = billingAddress.state ? (region.states.find(x => x.value === billingAddress.state)).label : null;
    var city = billingAddress.city && billingAddress.state ?
      (region.states.find(x => x.value === billingAddress.state)).cities.find(
        x => x.value === billingAddress.city
      ).label
      : null;

    var address1 = billingAddress ? billingAddress.address1 : '';
    var address2 = billingAddress ? billingAddress.address2 : '';

    setAddress('ایران' + '-' + state + '-' + city + '-' + address1 + '-' + address2)

  }, [active])

  // const getData=()=>{
  //   fetch('api/ir'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });
  // }

  useEffect(() => {
    if (!active) return false
    dispatch(setBillingInput())
  }, [active])

  const handlePayment = () => {
    axios({
      method: 'post',
      url: "https://sandbox.zarinpal.com/pg/v4/payment/request.json",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        merchant_id: "f19c638c-3bcc-11e6-9fe2-005056a205be",
        amount: "10000",
        callback_url: "https://projekt.ir",
        description: "داستانا"
      }
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div className="user-basket-box">
      <div className="user-basket-box__header">
        <h1 className="user-basket-box__title">:جمع سبد خرید</h1>
        <div className="user-basket-box__header__content">
          <div className="user-basket-box__header__content__price">
            <h2 className="user-basket-box__header__content__price__text">
              {stringToNumber(cart.total) + ' ت'}
            </h2>
          </div>
          <div className="user-basket-box__header__content__wallet">
            {
              !cart.isEmpty ? <ApplyCoupon /> : null
            }
            {
              !cart.isEmpty ? <WalletCredit /> : null
            }
          </div>
        </div>
      </div>
      <div className="user-basket-box__address">
        <h1 className="user-basket-box__title">:آدرس</h1>
        <p className="user-basket-box__address__text">
          {address}
        </p>
      </div>
      <UserAddressAddModal show={modalShow} onHide={() => setModalShow(false)} />
      <ShippingBasket {...props} />
      <ShippingDateTime />
      <div className="user-basket-box__purchase">
        <h1 className="user-basket-box__title">پرداخت امن زرین پال</h1>
        <div className="user-basket-box__purchase__btn-wrap">
          <button onClick={handlePayment} disabled={cart.isEmpty ? true : false} className="user-basket-box__purchase__btn" type="submit">
            {cart.isEmpty ? 'سبد خرید شما خالی است' : 'پرداخت'}
          </button>
        </div>
      </div>
    </div>
  );
}
