import { Affix } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
  Button,
} from "reactstrap";
import CustomModal from "../../../components/customModal/CustomModal";
import { userLogOut } from "../../../store/auth/action";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import Uz from "../../../assets/images/uz.png";
import Ru from "../../../assets/images/ru.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import "./TopNavBar.scss";

function TopNavBar() {
  const [t, i18n] = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [isOpen, setIsOpen] = useState(false);

  let history = useHistory();

  const { sendLoading, regLoading } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const logoutAction = () => {
    dispatch(userLogOut(history));
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [modalone, setModalone] = useState(false);
  const toggleModalone = () => setModalone(!modalone);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Affix offsetTop={0}>
      <Navbar
        // className="shadow-lg"
        style={{ backgroundColor: "rgb(232, 241, 255)" }}
        light
        expand="md"
      >
        <Container fluid>
          <NavbarBrand href="/">
            <svg
              class="brand-img"
              width="146"
              height="62"
              viewBox="0 0 146 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M61.7203 19.0869L55.3018 20.2095L57.9896 13.8378L58.967 11.7707L59.5917 10.4497C59.8264 9.95305 60.0998 9.47531 60.4091 9.02085L61.2387 7.80189C61.7422 7.06227 62.3377 6.38909 63.0111 5.79842L64.1526 4.79717C64.6367 4.37248 65.1586 3.99255 65.7121 3.66208L67.3236 2.69965C69.0383 1.70152 70.9089 0.996572 72.8577 0.614114L73.3834 0.510924C74.4212 0.314726 75.4726 0.198578 76.5284 0.163513L76.9717 0.148786C78.4863 0.0984759 80.0024 0.178791 81.5032 0.38883L82.3756 0.510924L83.4699 0.785575C84.6603 1.0843 85.8224 1.48509 86.9433 1.98342L87.7816 2.35615L89.3067 3.25993C89.9849 3.66177 90.6159 4.13752 91.1883 4.6784L91.6169 5.08349L92.4943 5.92811L92.8388 6.30743C93.2412 6.75045 93.6052 7.2266 93.9271 7.73074L94.0064 7.85532L94.262 8.38481C94.4799 8.83667 94.593 9.33151 94.593 9.83274C94.593 10.1663 94.5428 10.498 94.4442 10.8168L94.3234 11.2079C94.1138 11.8859 93.7864 12.5221 93.3558 13.0875L92.7848 13.8378L91.7279 14.8897C90.9708 15.6433 90.1035 16.2787 89.1555 16.7744L87.7023 17.5344L83.353 19.334L78.8569 20.8904L72.3085 22.4468L65.7599 23.5655L60.9262 24.0185L56.1438 24.2005L50.9999 24.2854C50.9471 24.2862 50.9401 24.2098 50.9922 24.2014L57.3055 23.1764L61.3127 22.4468L65.1735 21.474L69.2297 20.55L72.9438 19.334L75.6316 18.4099L79.6878 16.5129L80.7925 15.9766C81.3903 15.6864 81.9576 15.3377 82.4857 14.9356L82.7723 14.7175C83.1582 14.4238 83.5109 14.0892 83.8243 13.7196L83.9938 13.5196C84.4419 12.991 84.7827 12.3808 84.9971 11.7229L85.1219 11.3399C85.2126 11.0614 85.2588 10.7704 85.2588 10.4777C85.2588 9.97114 85.1206 9.47415 84.8587 9.03979L84.8448 9.01666C84.5417 8.51374 84.092 8.11447 83.5554 7.87176L82.7666 7.51484C81.5054 6.96776 80.1587 6.6423 78.7859 6.55291L77.0412 6.4393C76.1036 6.37826 75.1624 6.40697 74.2303 6.52502C73.3792 6.63284 72.5536 6.88837 71.7912 7.28001L70.8115 7.78326C70.2143 8.09001 69.6479 8.45244 69.1193 8.86564L69.0777 8.89833C67.3647 10.2379 65.8688 11.8314 64.6422 13.6233L63.8336 14.8044L61.7203 19.0869Z"
                  fill="url(#paint0_linear)"
                ></path>
                <path
                  d="M83.2875 27.3039L89.706 26.1814L87.0182 32.553L86.0408 34.6201L85.4161 35.941C85.1814 36.4378 84.908 36.9154 84.5987 37.3699L83.7691 38.589C83.2656 39.3285 82.6701 40.0016 81.9967 40.5924L80.8552 41.5935C80.3711 42.0182 79.8492 42.3983 79.2957 42.7286L77.6842 43.6912C75.9695 44.6893 74.0989 45.3942 72.1501 45.7767L71.6243 45.8798C70.5866 46.076 69.5352 46.1921 68.4794 46.2272L68.0361 46.2421C66.5215 46.2922 65.0054 46.212 63.5046 46.0019L62.6322 45.8798L61.5379 45.6051C60.3475 45.3066 59.1854 44.9058 58.0645 44.4072L57.2262 44.0346L55.7011 43.1308C55.0229 42.729 54.3919 42.2533 53.8195 41.7125L53.3909 41.3072L52.5135 40.4627L52.169 40.0833C51.7666 39.6402 51.4026 39.1641 51.0807 38.6601L51.0014 38.5354L50.7458 38.006C50.5279 37.554 50.4148 37.0593 50.4148 36.558C50.4148 36.2245 50.465 35.8927 50.5636 35.574L50.6844 35.1828C50.894 34.5048 51.2214 33.8687 51.652 33.3033L52.223 32.553L53.2799 31.5011C54.037 30.7476 54.9043 30.1121 55.8523 29.6163L57.3055 28.8565L61.6548 27.0568L66.1509 25.5004L72.6993 23.9439L79.2479 22.8253L84.0816 22.3723L88.864 22.1903L94.0079 22.1052C94.0607 22.1044 94.0677 22.181 94.0156 22.1895L87.7023 23.2142L83.6951 23.9439L79.8343 24.9166L75.7781 25.8409L72.064 27.0568L69.3762 27.9808L65.32 29.8779L64.2153 30.4143C63.6175 30.7044 63.0502 31.0531 62.5221 31.4552L62.2355 31.6733C61.8496 31.967 61.4969 32.3016 61.1835 32.6713L61.014 32.8712C60.5659 33.3998 60.225 34.0099 60.0107 34.668L59.8859 35.051C59.7952 35.3294 59.749 35.6204 59.749 35.913C59.749 36.4196 59.8872 36.9167 60.1491 37.3509L60.163 37.3742C60.4661 37.8769 60.9158 38.2762 61.4524 38.5189L62.2412 38.8759C63.5024 39.4231 64.8491 39.7486 66.2219 39.8379L67.9666 39.9515C68.9042 40.0124 69.8454 39.9839 70.7775 39.8658C71.6286 39.7579 72.4542 39.5025 73.2166 39.1108L74.1963 38.6076C74.7935 38.3008 75.3599 37.9383 75.8885 37.525L75.9301 37.4924C77.6431 36.153 79.139 34.5594 80.3656 32.7675L81.1741 31.5864L83.2875 27.3039Z"
                  fill="url(#paint1_linear)"
                ></path>
                <path
                  d="M0.705811 59.0413V51.2185H3.45894C4.41265 51.2185 5.13601 51.4012 5.62905 51.7666C6.1221 52.1282 6.36862 52.6602 6.36862 53.3623C6.36862 53.7455 6.26967 54.0841 6.07173 54.3778C5.87379 54.6679 5.59848 54.881 5.24578 55.0171C5.64885 55.1174 5.96555 55.3199 6.19587 55.6241C6.42981 55.9286 6.54676 56.3013 6.54676 56.7418C6.54676 57.4939 6.30564 58.0635 5.8234 58.4503C5.34116 58.8371 4.65377 59.0342 3.76125 59.0413H0.705811ZM2.32531 55.6349V57.7465H3.71267C4.09414 57.7465 4.39105 57.6568 4.60338 57.4778C4.81931 57.2952 4.92727 57.0444 4.92727 56.7256C4.92727 56.0093 4.5548 55.6457 3.80983 55.6349H2.32531ZM2.32531 54.4959H3.52373C4.34066 54.4817 4.74915 54.1575 4.74915 53.5236C4.74915 53.1689 4.64477 52.9146 4.43603 52.7605C4.23091 52.6029 3.90521 52.5241 3.45894 52.5241H2.32531V54.4959ZM13.7157 51.2185V56.3711C13.7157 57.227 13.4458 57.904 12.906 58.4019C12.3697 58.8998 11.6356 59.1488 10.7035 59.1488C9.78575 59.1488 9.05698 58.907 8.51715 58.4235C7.97733 57.9399 7.702 57.2755 7.6912 56.4302V51.2185H9.31069V56.3817C9.31069 56.894 9.43307 57.2683 9.67778 57.5047C9.92611 57.7374 10.268 57.8538 10.7035 57.8538C11.614 57.8538 12.0764 57.3775 12.0908 56.4249V51.2185H13.7157ZM19.1194 56.989C19.1194 56.6845 19.0114 56.4515 18.7955 56.2905C18.5796 56.1257 18.1909 55.9538 17.6295 55.7746C17.0681 55.592 16.6236 55.413 16.2961 55.2373C15.4036 54.7574 14.9573 54.111 14.9573 53.2978C14.9573 52.8752 15.0761 52.499 15.3136 52.1695C15.5547 51.8364 15.8984 51.5768 16.3447 51.3906C16.7945 51.2042 17.2984 51.1111 17.8562 51.1111C18.4176 51.1111 18.9179 51.2133 19.3569 51.4172C19.796 51.6178 20.1361 51.9027 20.3772 52.2717C20.6219 52.6405 20.7443 53.0597 20.7443 53.5288H19.1248C19.1248 53.1706 19.0114 52.893 18.7847 52.696C18.558 52.4956 18.2395 52.3953 17.8292 52.3953C17.4333 52.3953 17.1256 52.4793 16.9061 52.6477C16.6866 52.8126 16.5768 53.0309 16.5768 53.3033C16.5768 53.5574 16.7046 53.7707 16.9601 53.9425C17.2192 54.1146 17.5989 54.2756 18.0991 54.426C19.0204 54.702 19.6916 55.0439 20.1127 55.4523C20.5338 55.8607 20.7443 56.3692 20.7443 56.9782C20.7443 57.6551 20.487 58.1871 19.9723 58.5739C19.4577 58.9571 18.7649 59.1488 17.894 59.1488C17.2894 59.1488 16.7388 59.0394 16.2421 58.8211C15.7455 58.5989 15.3658 58.2963 15.1031 57.9131C14.8439 57.5299 14.7144 57.0857 14.7144 56.5806H16.3393C16.3393 57.4437 16.8575 57.8754 17.894 57.8754C18.2791 57.8754 18.5796 57.7984 18.7955 57.6443C19.0114 57.4867 19.1194 57.2683 19.1194 56.989ZM23.5676 59.0413H21.9481V51.2185H23.5676V59.0413ZM31.4654 59.0413H29.8457L26.6932 53.8943V59.0413H25.0737V51.2185H26.6932L29.8513 56.3764V51.2185H31.4654V59.0413ZM37.6086 55.651H34.4991V57.7465H38.1484V59.0413H32.8797V51.2185H38.1375V52.5241H34.4991V54.3884H37.6086V55.651ZM43.1743 56.989C43.1743 56.6845 43.0663 56.4515 42.8502 56.2905C42.6344 56.1257 42.2458 55.9538 41.6843 55.7746C41.1228 55.592 40.6784 55.413 40.351 55.2373C39.4585 54.7574 39.0122 54.111 39.0122 53.2978C39.0122 52.8752 39.1308 52.499 39.3683 52.1695C39.6096 51.8364 39.9532 51.5768 40.3995 51.3906C40.8494 51.2042 41.3533 51.1111 41.9109 51.1111C42.4724 51.1111 42.9727 51.2133 43.4117 51.4172C43.8508 51.6178 44.191 51.9027 44.4321 52.2717C44.6768 52.6405 44.799 53.0597 44.799 53.5288H43.1796C43.1796 53.1706 43.0663 52.893 42.8396 52.696C42.6128 52.4956 42.2943 52.3953 41.8839 52.3953C41.4881 52.3953 41.1804 52.4793 40.961 52.6477C40.7414 52.8126 40.6317 53.0309 40.6317 53.3033C40.6317 53.5574 40.7594 53.7707 41.015 53.9425C41.274 54.1146 41.6537 54.2756 42.1539 54.426C43.0752 54.702 43.7464 55.0439 44.1676 55.4523C44.5885 55.8607 44.799 56.3692 44.799 56.9782C44.799 57.6551 44.5418 58.1871 44.0273 58.5739C43.5125 58.9571 42.8198 59.1488 41.9488 59.1488C41.3441 59.1488 40.7937 59.0394 40.297 58.8211C39.8004 58.5989 39.4206 58.2963 39.1578 57.9131C38.8987 57.5299 38.7692 57.0857 38.7692 56.5806H40.3942C40.3942 57.4437 40.9123 57.8754 41.9488 57.8754C42.3338 57.8754 42.6344 57.7984 42.8502 57.6443C43.0663 57.4867 43.1743 57.2683 43.1743 56.989ZM49.9761 56.989C49.9761 56.6845 49.8681 56.4515 49.6523 56.2905C49.4363 56.1257 49.0476 55.9538 48.4861 55.7746C47.9248 55.592 47.4803 55.413 47.1528 55.2373C46.2603 54.7574 45.814 54.111 45.814 53.2978C45.814 52.8752 45.9327 52.499 46.1704 52.1695C46.4115 51.8364 46.755 51.5768 47.2013 51.3906C47.6512 51.2042 48.1551 51.1111 48.713 51.1111C49.2743 51.1111 49.7745 51.2133 50.2136 51.4172C50.6526 51.6178 50.9928 51.9027 51.2339 52.2717C51.4786 52.6405 51.6011 53.0597 51.6011 53.5288H49.9814C49.9814 53.1706 49.8681 52.893 49.6414 52.696C49.4146 52.4956 49.0961 52.3953 48.686 52.3953C48.2901 52.3953 47.9822 52.4793 47.7628 52.6477C47.5432 52.8126 47.4335 53.0309 47.4335 53.3033C47.4335 53.5574 47.5613 53.7707 47.8168 53.9425C48.076 54.1146 48.4555 54.2756 48.9558 54.426C49.8772 54.702 50.5482 55.0439 50.9694 55.4523C51.3904 55.8607 51.6011 56.3692 51.6011 56.9782C51.6011 57.6551 51.3436 58.1871 50.8291 58.5739C50.3143 58.9571 49.6217 59.1488 48.7506 59.1488C48.1461 59.1488 47.5955 59.0394 47.0988 58.8211C46.6022 58.5989 46.2225 58.2963 45.9597 57.9131C45.7007 57.5299 45.571 57.0857 45.571 56.5806H47.196C47.196 57.4437 47.7141 57.8754 48.7506 57.8754C49.1358 57.8754 49.4363 57.7984 49.6523 57.6443C49.8681 57.4867 49.9761 57.2683 49.9761 56.989ZM61.048 52.5241H58.6404V59.0413H57.0209V52.5241H54.6456V51.2185H61.048V52.5241ZM64.8862 56.1777H63.5961V59.0413H61.9764V51.2185H64.897C65.8255 51.2185 66.5416 51.4244 67.0455 51.8364C67.5493 52.2484 67.8013 52.8303 67.8013 53.5826C67.8013 54.1163 67.6844 54.5621 67.4503 54.9204C67.22 55.275 66.8692 55.5579 66.3976 55.7693L68.0981 58.966V59.0413H66.36L64.8862 56.1777ZM63.5961 54.8721H64.9024C65.3091 54.8721 65.624 54.7699 65.847 54.5657C66.0702 54.3581 66.1818 54.0733 66.1818 53.7115C66.1818 53.3426 66.0755 53.0525 65.8633 52.8411C65.6546 52.6297 65.3325 52.5241 64.897 52.5241H63.5961V54.8721ZM73.7665 55.651H70.6569V57.7465H74.3063V59.0413H69.0374V51.2185H74.2955V52.5241H70.6569V54.3884H73.7665V55.651ZM81.6479 59.0413H80.0285L76.8757 53.8943V59.0413H75.2562V51.2185H76.8757L80.0338 56.3764V51.2185H81.6479V59.0413ZM83.0622 59.0413V51.2185H85.4807C86.1716 51.2185 86.7888 51.3743 87.3323 51.686C87.8793 51.9941 88.3058 52.4346 88.6118 53.0077C88.9177 53.5771 89.0706 54.2254 89.0706 54.9525V55.3127C89.0706 56.0397 88.9194 56.6862 88.6171 57.2522C88.3184 57.8181 87.8955 58.2569 87.3484 58.5684C86.8014 58.8801 86.1842 59.0378 85.4968 59.0413H83.0622ZM84.6817 52.5241V57.7465H85.4645C86.0979 57.7465 86.582 57.5404 86.9166 57.1287C87.2513 56.7167 87.4222 56.1276 87.4294 55.3609V54.9472C87.4294 54.152 87.264 53.5504 86.9328 53.142C86.6018 52.73 86.1176 52.5241 85.4807 52.5241H84.6817ZM99.1761 56.4354C99.1149 57.2772 98.8019 57.9399 98.2368 58.4235C97.6755 58.907 96.9342 59.1488 96.0127 59.1488C95.0052 59.1488 94.2115 58.812 93.6321 58.1386C93.0564 57.4617 92.7683 56.534 92.7683 55.3556V54.8774C92.7683 54.1251 92.9016 53.4626 93.1678 52.8894C93.4342 52.3164 93.8139 51.8777 94.307 51.5732C94.8036 51.2651 95.3794 51.1111 96.0344 51.1111C96.9412 51.1111 97.6719 51.3529 98.226 51.8364C98.7803 52.3199 99.1007 52.9988 99.187 53.8727H97.5675C97.528 53.3676 97.3857 53.0024 97.141 52.7766C96.8999 52.5474 96.5311 52.4327 96.0344 52.4327C95.4946 52.4327 95.0896 52.6261 94.8198 53.013C94.5534 53.3964 94.4167 53.9927 94.4094 54.8023V55.3933C94.4094 56.2384 94.5372 56.8563 94.7928 57.2467C95.0519 57.6371 95.4584 57.8324 96.0127 57.8324C96.513 57.8324 96.8855 57.7197 97.1302 57.4939C97.3785 57.2647 97.5208 56.912 97.5567 56.4354H99.1761ZM106.696 55.3072C106.696 56.0774 106.559 56.7524 106.286 57.3329C106.012 57.9131 105.62 58.3608 105.109 58.6759C104.602 58.9912 104.019 59.1488 103.36 59.1488C102.708 59.1488 102.127 58.9929 101.616 58.6814C101.105 58.3697 100.709 57.9256 100.429 57.3489C100.148 56.7687 100.006 56.1024 100.002 55.3501V54.9633C100.002 54.1933 100.141 53.5164 100.418 52.9325C100.698 52.3451 101.093 51.8955 101.6 51.584C102.111 51.2687 102.694 51.1111 103.349 51.1111C104.004 51.1111 104.585 51.2687 105.093 51.584C105.604 51.8955 105.998 52.3451 106.275 52.9325C106.556 53.5164 106.696 54.1914 106.696 54.958V55.3072ZM105.055 54.9525C105.055 54.1323 104.907 53.5092 104.612 53.083C104.317 52.6566 103.896 52.4435 103.349 52.4435C102.806 52.4435 102.386 52.6549 102.091 53.0775C101.796 53.4967 101.647 54.1127 101.643 54.9259V55.3072C101.643 56.106 101.791 56.7256 102.086 57.1661C102.381 57.6067 102.806 57.8269 103.36 57.8269C103.903 57.8269 104.321 57.6158 104.612 57.193C104.904 56.7668 105.051 56.1472 105.055 55.334V54.9525ZM109.989 51.2185L112.008 56.8923L114.016 51.2185H116.143V59.0413H114.518V56.9029L114.68 53.2119L112.559 59.0413H111.446L109.33 53.2172L109.492 56.9029V59.0413H107.873V51.2185H109.989ZM119.177 56.285V59.0413H117.557V51.2185H120.624C121.214 51.2185 121.732 51.326 122.178 51.5408C122.628 51.7558 122.974 52.062 123.215 52.4596C123.456 52.8536 123.577 53.3033 123.577 53.8082C123.577 54.5748 123.312 55.18 122.783 55.6241C122.257 56.0647 121.529 56.285 120.597 56.285H119.177ZM119.177 54.9794H120.624C121.052 54.9794 121.378 54.8791 121.601 54.6787C121.827 54.4781 121.941 54.1914 121.941 53.819C121.941 53.4357 121.827 53.126 121.601 52.8894C121.374 52.653 121.061 52.5313 120.661 52.5241H119.177V54.9794ZM128.17 57.4296H125.331L124.791 59.0413H123.069L125.995 51.2185H127.496L130.438 59.0413H128.716L128.17 57.4296ZM125.768 56.124H127.733L126.745 53.1958L125.768 56.124ZM137.564 59.0413H135.944L132.791 53.8943V59.0413H131.172V51.2185H132.791L135.949 56.3764V51.2185H137.564V59.0413ZM141.537 54.743L143.172 51.2185H144.943L142.363 56.2046V59.0413H140.716V56.2046L138.136 51.2185H139.912L141.537 54.743Z"
                  fill="#4448E3"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="72.5039"
                  y1="0.0731793"
                  x2="72.5039"
                  y2="24.2951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5F2EEA"></stop>
                  <stop offset="0.770833" stop-color="#7586FF"></stop>
                  <stop offset="1" stop-color="#605CFF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="72.5039"
                  y1="46.3176"
                  x2="72.5039"
                  y2="22.0957"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#057CD3"></stop>
                  <stop offset="1" stop-color="#0295FF"></stop>
                </linearGradient>
                <clipPath id="clip0">
                  <rect
                    width="145"
                    height="62"
                    fill="white"
                    transform="translate(0.00390625)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem className="d-flex justify-content-center ml-4 align-items-center">
                <Link
                  className="nav-style"
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  {t(`homeNavbar.home`)}{" "}
                </Link>
              </NavItem>
              <NavItem className="d-flex justify-content-center ml-4 align-items-center">
                <Link
                  className="nav-style"
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  {t(`homeNavbar.aboute`)}
                </Link>
              </NavItem>
              <NavItem className="d-flex justify-content-center ml-4 align-items-center">
                <Link
                  className="nav-style"
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  {t(`homeNavbar.pdfInfo`)}
                </Link>
              </NavItem>
              <NavItem className="d-flex justify-content-center ml-4 align-items-center">
                <Link
                  className="nav-style"
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {" "}
                  {t(`homeNavbar.contacts`)}
                </Link>
              </NavItem>
              <NavItem className="d-flex justify-content-center ml-4 align-items-center">
                <NavLink className="nav-style" href="#!">
                  <Button
                    value="uz"
                    onClick={(e) => {
                      changeLang("uz");
                    }}
                    className="m-2 border-0 text-primary bg-light"
                  >
                    <img src={Uz} width={20} alt="uz" /> Uz
                  </Button>
                  <Button
                    value="ru"
                    onClick={(e) => {
                      changeLang("ru");
                    }}
                    className="m-2 border-0 text-primary bg-light"
                  >
                    <img src={Ru} width={25} alt="uz" /> Ru
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>

            {localStorage.getItem("token") ? (
              <div className="d-flex">
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <RouterLink to="/admin">
                    <button className="nav-admin-btn px-3 py-1 rounded-pill">
                      {t(`homeNavbar.goToAdmin`)}
                    </button>
                  </RouterLink>
                </NavbarText>
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <button
                    className="nav-admin-btn px-3 py-1 rounded-pill"
                    onClick={() => logoutAction()}
                  >
                    {t(`homeNavbar.logOut`)}
                  </button>
                </NavbarText>
              </div>
            ) : (
              <div className="d-flex">
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <CustomModal
                    className="header-btn  px-3 py-1 rounded-pill"
                    buttonLabel={t(`homeNavbar.signIn`)}
                    title={t(`homeNavbar.signIn`)}
                    modalContent={<SignIn sendLoading={sendLoading} />}
                    toggleModal={toggleModal}
                    modal={modal}
                  />
                </NavbarText>
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <CustomModal
                    className="header-btn  px-3 py-1 rounded-pill"
                    buttonLabel={t(`homeNavbar.signUp`)}
                    modalContent={
                      <SignUp
                        toggleModal={toggleModalone}
                        regLoading={regLoading}
                      />
                    }
                    size="lg"
                    toggleModal={toggleModalone}
                    modal={modalone}
                  />
                </NavbarText>
              </div>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </Affix>
  );
}

export default TopNavBar;
