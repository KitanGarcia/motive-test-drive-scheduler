import { carData, currentPick } from "../types/carSelection";

export const initialCar: currentPick = {
  year: "2022",
  brand: "Ford",
  model: "EcoSport",
  trim: "S",
  image:
    "https://build.ford.com/dig/Ford/EcoSport/2022/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2022%7C1%7C1.%7C100A.S3F..PTY..88M.89M.~3JM00_ABFAA.648.T7F.DR--E.99L.58N.SYN.446.VS-AE.CLO.%5D/EXT/4/vehicle.png",
};

export const carList: carData = {
  2022: {
    Ford: {
      EcoSport: {
        S: "https://build.ford.com/dig/Ford/EcoSport/2022/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2022%7C1%7C1.%7C100A.S3F..PTY..88M.89M.~3JM00_ABFAA.648.T7F.DR--E.99L.58N.SYN.446.VS-AE.CLO.%5D/EXT/4/vehicle.png",
        SE: "https://build.ford.com/dig/Ford/EcoSport/2022/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2022%7C1%7C1.%7C200A.S3G..PN6..88N.89M.~3JN00_ABFAA.PMR.64K.T7F.DR--E.99L.SIR.58P.SYN.446.VS-CE.UCL.%5D/EXT/4/vehicle.png",
        SES: "https://build.ford.com/dig/Ford/EcoSport/2022/HD-TILE/Image%5B%7CFord%7CEcoSport%7C2022%7C1%7C1.%7C300A.S3J..PZA..88S.89B.~3JS00_ABFAV.PMR.64P.TAN.DR--E.99L.BLS.SIR.586.SY3.446.VS-F7.ACT.%5D/EXT/4/vehicle.png",
      },
      Maverick: {
        XL: "https://build.ford.com/dig/Ford/Maverick/2022/HD-TILE/Image%5B%7CFord%7CMaverick%7C2022%7C1%7C1.%7C100A.W8E.121.PG1..889.89W.SCC.52H.64Z.T7R.FWD.993.58K.445.XL.CLO.%5D/EXT/1/vehicle.png",
        XLT: "https://build.ford.com/dig/Ford/Maverick/2022/HD-TILE/Image%5B%7CFord%7CMaverick%7C2022%7C1%7C1.%7C300A.W8E.121.PKU..887.89B.SCC.52H.64T.T7R.FWD.993.58K.445.XLT.UCS.%5D/EXT/1/vehicle.png",
        Lariat:
          "https://build.ford.com/dig/Ford/Maverick/2022/HD-TILE/Image%5B%7CFord%7CMaverick%7C2022%7C1%7C1.%7C500A.W8E.121.PE7..886.89N.SCC.52H.90K.648.T7Z.FWD.993.58K.445.LAR.ACS.%5D/EXT/1/vehicle.png",
      },
      Mustang: {
        Mach1:
          "https://build.ford.com/dig/Ford/Mustang/2022/HD-FULL/Image%5B%7CFord%7CMustang%7C2022%7C1%7C1.%7C600A.P8R..PJS..88W.891.SED.574.12U.13Q.COU.856.90N.64S.T3D.RWD.67G.96B.45T.990.19B.DIS.91N.50B.14A.SSR.58E.IDAAQ.SY3.AML.44U.MAC.LESS.CLO.%5D/EXT/1/vehicle.png",
        EcoBoost_Premium_Convertible:
          "https://build.ford.com/dig/Ford/Mustang/2022/HD-FULL/Image%5B%7CFord%7CMustang%7C2022%7C1%7C1.%7C201A.P8U..PAE..885.89X.~2Z500_BCMAD.68B.SED.574.43M.77S.WCC.12U.UCA.13K.CON.51H.MDS.66W.649.T3T.14L.RWD.45Y.99H.19B.AFP.HSW.52C.DIS.91N.50B.14A.77R.SSR.583.912.SY3.JCBAP.44U.EBST.PRE.PLT.%5D/EXT/1/vehicle.png",
        Shelby_GT500:
          "https://build.ford.com/dig/Ford/Mustang/2022/HD-FULL/Image%5B%7CFord%7CMustang%7C2022%7C1%7C1.%7C950A.P8S..PHY..88B.89V.SED.574.WCC.59B.COU.51H.55C.64H.TBJ.RES.RWD.67K.457.99J.19B.18F.AFP.DIS.91N.50B.SSR.583.912.SY3.67T.44G.GT5.PRE.LET.%5D/EXT/1/vehicle.png",
      },
    },
    Chevrolet: {
      Equinox: {
        LT: "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/1XX26/1XX26__1LS/GHT_LYX_MNH_FX6_GHT_AR9_HC8_IORgmds2.jpg&v=deg03&std=true&country=US&removeCat=",
        RS: "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/1XY26/1XY26__1LT/GHT_LYX_MNH_FX6_RZS_5CY_GHT_AR9_HC8_IORgmds2.jpg&v=deg03&std=true&country=US&removeCat=",
        Premier:
          "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/1XZ26/1XZ26__1LZ/GHT_LYX_MNH_FX6_RV8_RUB_GHT_AR9_HX1_IOSgmds2.jpg&v=deg03&std=true&country=US&removeCat=",
      },
      Silverado: {
        Regular:
          "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/CK18903/CK18903__1WT/G7C_E63_L84_MQE_GU5_RD6_QBN_QBR_G7C_AE7_H2G_IOR_KC4_KW7gmds2.jpg&v=deg01&std=true&country=US&removeCat=",
        Double:
          "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/CK18753/CK18753__1WT/G7C_L84_MQE_GU5_RD6_QBN_QBR_G7C_AE7_H2G_IOR_KC4_KW7gmds2.jpg&v=deg01&std=true&country=US&removeCat=",
        Crew: "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/CK18743/CK18743__1WT/G7C_L84_MQE_GU5_RD6_QBN_QBR_G7C_AE7_H2G_IOR_KC4_KW7gmds2.jpg&v=deg01&std=true&country=US&removeCat=",
      },
      Malibu: {
        LT: "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/1ZC69/1ZC69__1LS/G5D_LFV_MRG_G5D_A51_H1T_IORgmds2.jpg&v=deg01&std=true&country=US&removeCat=",
        RS: "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/1ZS69/1ZS69__1SP/G5D_LFV_MRG_G5D_A51_H1T_IORgmds2.jpg&v=deg01&std=true&country=US&removeCat=",
        Premier:
          "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2022/1ZF69/1ZF69__2LZ/G5D_LTG_M3E_G5D_A51_H1Y_IOUgmds2.jpg&v=deg01&std=true&country=US&removeCat=",
      },
    },
    Dodge: {
      Durango: {
        SXT: "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVTd9pivwXGXQpMTV1rUp3g6OQCckPquBhS1U%25jzbTllxA0zmil%253QFmwpDkpd2dTBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
        GT: "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVTd9pivwXGXQpMTV1rUh4g6OQCckPquBhS1U%25jzbTllxA0zmij%253QFmwpEkpd2dYBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
        GT_PLUS:
          "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVTd9pivwXGXQpMTV1rU7ug6OQCckPquBhS1U%25jzbTllxA0zmij%253QFmwpdkpd2dMBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
      },
      Ram: {
        Tradesman:
          "https://www.ramtrucks.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk6GBfM9IW2VRkr72kVTd9po5wXGXQpMTV1rUp3g6OQCckPquBhS1U%254zbTllxA0kcIlfaQFmwpikpd2UCBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
        Express:
          "https://www.ramtrucks.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk6GBfM9IW2VRkr72kVTd9po5wXGXQpMTV1rU7fg6OQCckPquBhS1U%254zbTllxA0kcIlfaQFmwp5kpd2UUBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
        Warlock:
          "https://www.ramtrucks.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk6GBfM9IW2VRkr72kVTd9po5wXGXQpMTV1rU76g6OQCckPquBhS1U%25jzbTllxA0kcIjnaQFmwpBkpd2UwBoM4ljIU&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
      },
      Charger: {
        SXT_RWD:
          "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVTd9pavwXGXQpMTV1rUp3g6OQCckPquBhS1U%25jzbTllxA0omimnvQFmwFhkpd2wqBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
        GT_RWD:
          "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVTd9pavwXGXQpMTV1rU7Wg6OQCckPquBhS1U%25jzbTllxA0omignvQFmwFukpd2wIBoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
        "R/T":
          "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVTd9pavwXGXQpMTV1rUKLg6OQCckPquBhS1U%25jzbTllxA0omiVnvQFmwF3kpd2z6BoM&&pov=fronthero&width=1450&height=546&bkgnd=white&resp=jpg&cut=&x=&y=&w=&h=",
      },
    },
  },
  2021: {
    Ford: {
      Ecosport: {
        S: "https://via.placeholder.com/770x430",
        SE: "https://via.placeholder.com/770x430",
        SES: "https://via.placeholder.com/770x430",
      },
      Maverick: {
        XL: "https://via.placeholder.com/770x430",
        XLT: "https://via.placeholder.com/770x430",
        Lariat: "https://via.placeholder.com/770x430",
      },
      Mustang: {
        Mach1: "https://via.placeholder.com/770x430",
        EcoBoost_Premium_Convertible: "https://via.placeholder.com/770x430",
        Shelby_GT500: "https://via.placeholder.com/770x430",
      },
    },
    Chevrolet: {
      Equinox: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
      Silverado: {
        Regular: "https://via.placeholder.com/770x430",
        Double: "https://via.placeholder.com/770x430",
        Crew: "https://via.placeholder.com/770x430",
      },
      Malibu: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
    },
    Dodge: {
      Durango: {
        SXT: "https://via.placeholder.com/770x430",
        GT: "https://via.placeholder.com/770x430",
        GT_PLUS: "https://via.placeholder.com/770x430",
      },
      Ram: {
        Tradesman: "https://via.placeholder.com/770x430",
        Express: "https://via.placeholder.com/770x430",
        Warlock: "https://via.placeholder.com/770x430",
      },
      Charger: {
        SXT_RWD: "https://via.placeholder.com/770x430",
        GT_RWD: "https://via.placeholder.com/770x430",
        "R/T": "https://via.placeholder.com/770x430",
      },
    },
  },
  2020: {
    Ford: {
      Ecosport: {
        S: "https://via.placeholder.com/770x430",
        SE: "https://via.placeholder.com/770x430",
        SES: "https://via.placeholder.com/770x430",
      },
      Maverick: {
        XL: "https://via.placeholder.com/770x430",
        XLT: "https://via.placeholder.com/770x430",
        Lariat: "https://via.placeholder.com/770x430",
      },
      Mustang: {
        Mach1: "https://via.placeholder.com/770x430",
        EcoBoost_Premium_Convertible: "https://via.placeholder.com/770x430",
        Shelby_GT500: "https://via.placeholder.com/770x430",
      },
    },
    Chevrolet: {
      Equinox: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
      Silverado: {
        Regular: "https://via.placeholder.com/770x430",
        Double: "https://via.placeholder.com/770x430",
        Crew: "https://via.placeholder.com/770x430",
      },
      Malibu: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
    },
    Dodge: {
      Durango: {
        SXT: "https://via.placeholder.com/770x430",
        GT: "https://via.placeholder.com/770x430",
        GT_PLUS: "https://via.placeholder.com/770x430",
      },
      Ram: {
        Tradesman: "https://via.placeholder.com/770x430",
        Express: "https://via.placeholder.com/770x430",
        Warlock: "https://via.placeholder.com/770x430",
      },
      Charger: {
        SXT_RWD: "https://via.placeholder.com/770x430",
        GT_RWD: "https://via.placeholder.com/770x430",
        "R/T": "https://via.placeholder.com/770x430",
      },
    },
  },
  2019: {
    Ford: {
      Ecosport: {
        S: "https://via.placeholder.com/770x430",
        SE: "https://via.placeholder.com/770x430",
        SES: "https://via.placeholder.com/770x430",
      },
      Maverick: {
        XL: "https://via.placeholder.com/770x430",
        XLT: "https://via.placeholder.com/770x430",
        Lariat: "https://via.placeholder.com/770x430",
      },
      Mustang: {
        Mach1: "https://via.placeholder.com/770x430",
        EcoBoost_Premium_Convertible: "https://via.placeholder.com/770x430",
        Shelby_GT500: "https://via.placeholder.com/770x430",
      },
    },
    Chevrolet: {
      Equinox: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
      Silverado: {
        Regular: "https://via.placeholder.com/770x430",
        Double: "https://via.placeholder.com/770x430",
        Crew: "https://via.placeholder.com/770x430",
      },
      Malibu: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
    },
    Dodge: {
      Durango: {
        SXT: "https://via.placeholder.com/770x430",
        GT: "https://via.placeholder.com/770x430",
        GT_PLUS: "https://via.placeholder.com/770x430",
      },
      Ram: {
        Tradesman: "https://via.placeholder.com/770x430",
        Express: "https://via.placeholder.com/770x430",
        Warlock: "https://via.placeholder.com/770x430",
      },
      Charger: {
        SXT_RWD: "https://via.placeholder.com/770x430",
        GT_RWD: "https://via.placeholder.com/770x430",
        "R/T": "https://via.placeholder.com/770x430",
      },
    },
  },
  2018: {
    Ford: {
      Ecosport: {
        S: "https://via.placeholder.com/770x430",
        SE: "https://via.placeholder.com/770x430",
        SES: "https://via.placeholder.com/770x430",
      },
      Maverick: {
        XL: "https://via.placeholder.com/770x430",
        XLT: "https://via.placeholder.com/770x430",
        Lariat: "https://via.placeholder.com/770x430",
      },
      Mustang: {
        Mach1: "https://via.placeholder.com/770x430",
        EcoBoost_Premium_Convertible: "https://via.placeholder.com/770x430",
        Shelby_GT500: "https://via.placeholder.com/770x430",
      },
    },
    Chevrolet: {
      Equinox: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
      Silverado: {
        Regular: "https://via.placeholder.com/770x430",
        Double: "https://via.placeholder.com/770x430",
        Crew: "https://via.placeholder.com/770x430",
      },
      Malibu: {
        LT: "https://via.placeholder.com/770x430",
        RS: "https://via.placeholder.com/770x430",
        Premier: "https://via.placeholder.com/770x430",
      },
    },
    Dodge: {
      Durango: {
        SXT: "https://via.placeholder.com/770x430",
        GT: "https://via.placeholder.com/770x430",
        GT_PLUS: "https://via.placeholder.com/770x430",
      },
      Ram: {
        Tradesman: "https://via.placeholder.com/770x430",
        Express: "https://via.placeholder.com/770x430",
        Warlock: "https://via.placeholder.com/770x430",
      },
      Charger: {
        SXT_RWD: "https://via.placeholder.com/770x430",
        GT_RWD: "https://via.placeholder.com/770x430",
        "R/T": "https://via.placeholder.com/770x430",
      },
    },
  },
};
