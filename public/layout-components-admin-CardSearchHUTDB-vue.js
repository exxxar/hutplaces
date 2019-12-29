(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-admin-CardSearchHUTDB-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Toggle.vue */ "./resources/js/components/Toggle.vue");
/* harmony import */ var _components_admin_CardHUTDB_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/admin/CardHUTDB.vue */ "./resources/js/components/admin/CardHUTDB.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SearchForm',
  data: function data() {
    return {
      savedCard: {
        console: 0,
        places: 0,
        price: 0,
        card: null
      },
      year: true,
      proxyurl: 'https://cors-anywhere.herokuapp.com/',
      request: '',
      playerName: '',
      league: 'Any',
      position: [],
      handedness: '',
      height: [],
      synergy: [],
      heightLabels: [{
        id: 64,
        name: "5'4"
      }, {
        id: 65,
        name: "5'5"
      }, {
        id: 66,
        name: "5'6"
      }, {
        id: 67,
        name: "5'7"
      }, {
        id: 68,
        name: "5'8"
      }, {
        id: 69,
        name: "5'9"
      }, {
        id: 70,
        name: "5'10"
      }, {
        id: 71,
        name: "5'11"
      }, {
        id: 72,
        name: "6'0"
      }, {
        id: 73,
        name: "6'1"
      }, {
        id: 74,
        name: "6'2"
      }, {
        id: 75,
        name: "6'3"
      }, {
        id: 76,
        name: "6'4"
      }, {
        id: 77,
        name: "6'5"
      }, {
        id: 78,
        name: "6'6"
      }, {
        id: 79,
        name: "6'7"
      }, {
        id: 80,
        name: "6'8"
      }, {
        id: 81,
        name: "6'9"
      }],
      leagueOptions: this.leagueOptions20,
      leagueOptions20: ["NHL", "AHL", "ECHL", "OHL", "QMJHL", "WHL", "SHL", "Liiga", "NL", "DEL", "EBEL", "CHL", "ELH", "Allsvenska", "National"],
      leagueOptions19: ["NHL", "SHL", "Liiga", "AHL", "NL", "OHL", "DEL", "ELH", "EBEL", "CHL", "ECHL", "Allsvenska", "WHL", "QMJHL", "National"],
      nationalityOptions: ["Australia", "Austria", "Belarus", "Belgium", "Canada", "Croatia", "Czech Republic", "Denmark", "England", "Estonia", "Finland", "France", "Germany", "Hungary", "Italy", "Latvia", "Liberia", "Lithuania", "Netherlands", "Norway", "Poland", "Romania", "Russia", "Slovakia", "Slovenia", "Sweden", "Switzerland", "USA", "Ukraine"],
      synergyLabels: [{
        id: 1,
        name: 'PP',
        year: 19
      }, {
        id: 2,
        name: 'S',
        year: 19
      }, {
        id: 3,
        name: 'NP',
        year: 19
      }, {
        id: 4,
        name: 'FM',
        year: 19
      }, {
        id: 5,
        name: 'CS',
        year: 19
      }, {
        id: 6,
        name: 'DZ',
        year: 19
      }, {
        id: 7,
        name: 'HT',
        year: 19
      }, {
        id: 8,
        name: 'BE',
        year: 19
      }, {
        id: 9,
        name: 'DW',
        year: 19
      }, {
        id: 10,
        name: 'BM',
        year: 19
      }, {
        id: 11,
        name: 'T',
        year: 19
      }, {
        id: 12,
        name: 'BR',
        year: 19
      }, {
        id: 13,
        name: 'FB',
        year: 19
      }, {
        id: 14,
        name: 'TB',
        year: 19
      }, {
        id: 15,
        name: 'BU',
        year: 19
      }, {
        id: 16,
        name: 'HH',
        year: 19
      }, {
        id: 17,
        name: 'CP',
        year: 19
      }, {
        id: 18,
        name: 'FS',
        year: 19
      }, {
        id: 19,
        name: 'NP',
        year: 20
      }, {
        id: 20,
        name: 'X',
        year: 20
      }, {
        id: 21,
        name: 'BL',
        year: 20
      }, {
        id: 22,
        name: 'TN',
        year: 20
      }, {
        id: 23,
        name: 'AD',
        year: 20
      }, {
        id: 24,
        name: 'DK',
        year: 20
      }, {
        id: 25,
        name: 'BM',
        year: 20
      }, {
        id: 26,
        name: 'WK',
        year: 20
      }, {
        id: 27,
        name: 'RS',
        year: 20
      }, {
        id: 28,
        name: 'M',
        year: 20
      }, {
        id: 29,
        name: 'WM',
        year: 20
      }, {
        id: 30,
        name: '1T',
        year: 20
      }, {
        id: 31,
        name: 'WC',
        year: 20
      }, {
        id: 32,
        name: 'FB',
        year: 20
      }, {
        id: 33,
        name: 'SP',
        year: 20
      }, {
        id: 34,
        name: 'TK',
        year: 20
      }],
      all_teams: [{
        league: 'NHL',
        value: "ANA",
        text: "Anaheim Ducks"
      }, {
        league: 'NHL',
        value: "ARZ",
        text: "Arizona Coyotes"
      }, {
        league: 'NHL',
        value: "NHLA",
        text: "Atlantic All-Stars"
      }, {
        league: 'NHL',
        value: "BOS",
        text: "Boston Bruins"
      }, {
        league: 'NHL',
        value: "BUF",
        text: "Buffalo Sabres"
      }, {
        league: 'NHL',
        value: "CGY",
        text: "Calgary Flames"
      }, {
        league: 'NHL',
        value: "CAR",
        text: "Carolina Hurricanes"
      }, {
        league: 'NHL',
        value: "CHI",
        text: "Chicago Blackhawks"
      }, {
        league: 'NHL',
        value: "COL",
        text: "Colorado Avalanche"
      }, {
        league: 'NHL',
        value: "CBJ",
        text: "Columbus Blue Jackets"
      }, {
        league: 'NHL',
        value: "DAL",
        text: "Dallas Stars"
      }, {
        league: 'NHL',
        value: "DET",
        text: "Detroit Red Wings"
      }, {
        league: 'NHL',
        value: "EDM",
        text: "Edmonton Oilers"
      }, {
        league: 'NHL',
        value: "FLA",
        text: "Florida Panthers"
      }, {
        league: 'NHL',
        value: "HAR",
        text: "Hartford Whalers"
      }, {
        league: 'NHL',
        value: "LAK",
        text: "Los Angeles Kings"
      }, {
        league: 'NHL',
        value: "MNS",
        text: "Minnesota North Stars"
      }, {
        league: 'NHL',
        value: "MIN",
        text: "Minnesota Wild"
      }, {
        league: 'NHL',
        value: "MTL",
        text: "Montreal Canadiens"
      }, {
        league: 'NHL',
        value: "NSH",
        text: "Nashville Predators"
      }, {
        league: 'NHL',
        value: "NJD",
        text: "New Jersey Devils"
      }, {
        league: 'NHL',
        value: "NYI",
        text: "New York Islanders"
      }, {
        league: 'NHL',
        value: "NYR",
        text: "New York Rangers"
      }, {
        league: 'NHL',
        value: "FA",
        text: "NHL Free Agents"
      }, {
        league: 'NHL',
        value: "OTT",
        text: "Ottawa Senators"
      }, {
        league: 'NHL',
        value: "NHLP",
        text: "Pacific All-Stars"
      }, {
        league: 'NHL',
        value: "PHI",
        text: "Philadelphia Flyers"
      }, {
        league: 'NHL',
        value: "PIT",
        text: "Pittsburgh Penguins"
      }, {
        league: 'NHL',
        value: "QC",
        text: "Quebec Nordiques"
      }, {
        league: 'NHL',
        value: "SJS",
        text: "San Jose Sharks"
      }, {
        league: 'NHL',
        value: "STL",
        text: "St. Louis Blues"
      }, {
        league: 'NHL',
        value: "TBL",
        text: "Tampa Bay Lightning"
      }, {
        league: 'NHL',
        value: "TOR",
        text: "Toronto Maple Leafs"
      }, {
        league: 'NHL',
        value: "VAN",
        text: "Vancouver Canucks"
      }, {
        league: 'NHL',
        value: "VGK",
        text: "Vegas Golden Knights"
      }, {
        league: 'NHL',
        value: "WSH",
        text: "Washington Capitals"
      }, {
        league: 'NHL',
        value: "WPG",
        text: "Winnipeg Jets"
      }, {
        league: 'AHL',
        value: "BAK",
        text: "Bakersfield Condors"
      }, {
        league: 'AHL',
        value: "BES",
        text: "Belleville Senators"
      }, {
        league: 'AHL',
        value: "BID",
        text: "Binghamton Devils"
      }, {
        league: 'AHL',
        value: "BIN",
        text: "Binghamton Senators"
      }, {
        league: 'AHL',
        value: "BRI",
        text: "Bridgeport Sound Tigers"
      }, {
        league: 'AHL',
        value: "CHA",
        text: "Charlotte Checkers"
      }, {
        league: 'AHL',
        value: "CHW",
        text: "Chicago Wolves"
      }, {
        league: 'AHL',
        value: "CLE",
        text: "Cleveland Monsters"
      }, {
        league: 'AHL',
        value: "COL",
        text: "Colorado Eagles"
      }, {
        league: 'AHL',
        value: "GRA",
        text: "Grand Rapids Griffins"
      }, {
        league: 'AHL',
        value: "HAR",
        text: "Hartford Wolf Pack"
      }, {
        league: 'AHL',
        value: "HER",
        text: "Hershey Bears"
      }, {
        league: 'AHL',
        value: "IOW",
        text: "Iowa Wild"
      }, {
        league: 'AHL',
        value: "LAV",
        text: "Laval Rockets"
      }, {
        league: 'AHL',
        value: "LEH",
        text: "Lehigh Valley Phantoms"
      }, {
        league: 'AHL',
        value: "MAN",
        text: "Manitoba Moose"
      }, {
        league: 'AHL',
        value: "MIL",
        text: "Milwaukee Admirals"
      }, {
        league: 'AHL',
        value: "ONT",
        text: "Ontario Reign"
      }, {
        league: 'AHL',
        value: "PRO",
        text: "Providence Bruins"
      }, {
        league: 'AHL',
        value: "RCH",
        text: "Rochester Americans"
      }, {
        league: 'AHL',
        value: "ROC",
        text: "Rockford IceHogs"
      }, {
        league: 'AHL',
        value: "SAR",
        text: "San Antonio Rampage"
      }, {
        league: 'AHL',
        value: "SDG",
        text: "San Diego Gulls"
      }, {
        league: 'AHL',
        value: "SJB",
        text: "San Jose Barracuda"
      }, {
        league: 'AHL',
        value: "SPT",
        text: "Springfield Thunderbirds"
      }, {
        league: 'AHL',
        value: "STO",
        text: "Stockton Heat"
      }, {
        league: 'AHL',
        value: "SYR",
        text: "Syracuse Crunch"
      }, {
        league: 'AHL',
        value: "TEX",
        text: "Texas Stars"
      }, {
        league: 'AHL',
        value: "TOR",
        text: "Toronto Marlies"
      }, {
        league: 'AHL',
        value: "TUC",
        text: "Tucson Roadrunners"
      }, {
        league: 'AHL',
        value: "UTI",
        text: "Utica Comets"
      }, {
        league: 'AHL',
        value: "WBS",
        text: "Wilkes-Barre/Scranton Penguins"
      }, {
        league: 'ECHL',
        value: "ADT",
        text: "Adirondack Thunder"
      }, {
        league: 'ECHL',
        value: "ALL",
        text: "Allen Americans"
      }, {
        league: 'ECHL',
        value: "ATL",
        text: "Atlanta Gladiators"
      }, {
        league: 'ECHL',
        value: "BRA",
        text: "Brampton Beast"
      }, {
        league: 'ECHL',
        value: "CIN",
        text: "Cincinnati Cyclones"
      }, {
        league: 'ECHL',
        value: "FLA",
        text: "Florida Everblades"
      }, {
        league: 'ECHL',
        value: "FWK",
        text: "Fort Wayne Komets"
      }, {
        league: 'ECHL',
        value: "GRE",
        text: "Greenville Swamp Rabbits"
      }, {
        league: 'ECHL',
        value: "IDS",
        text: "Idaho Steelheads"
      }, {
        league: 'ECHL',
        value: "IND",
        text: "Indy Fuel"
      }, {
        league: 'ECHL',
        value: "JAC",
        text: "Jacksonville IceMen"
      }, {
        league: 'ECHL',
        value: "KAL",
        text: "Kalamazoo Wings"
      }, {
        league: 'ECHL',
        value: "KC",
        text: "Kansas City Mavericks"
      }, {
        league: 'ECHL',
        value: "MAI",
        text: "Maine Mariners"
      }, {
        league: 'ECHL',
        value: "NFLD",
        text: "Newfoundland Growlers"
      }, {
        league: 'ECHL',
        value: "NOR",
        text: "Norfolk Admirals"
      }, {
        league: 'ECHL',
        value: "ORL",
        text: "Orlando Solar Bears"
      }, {
        league: 'ECHL',
        value: "RAP",
        text: "Rapid City Rush"
      }, {
        league: 'ECHL',
        value: "REA",
        text: "Reading Royals"
      }, {
        league: 'ECHL',
        value: "SCS",
        text: "South Carolina Stingrays"
      }, {
        league: 'ECHL',
        value: "TOL",
        text: "Toledo Walleye"
      }, {
        league: 'ECHL',
        value: "TUL",
        text: "Tulsa Oilers"
      }, {
        league: 'ECHL',
        value: "UTA",
        text: "Utah Grizzlies"
      }, {
        league: 'ECHL',
        value: "WHE",
        text: "Wheeling Nailers"
      }, {
        league: 'ECHL',
        value: "WIC",
        text: "Wichita Thunder"
      }, {
        league: 'ECHL',
        value: "WOR",
        text: "Worcester Railers"
      }, {
        league: 'OHL',
        value: "BAR",
        text: "Barrie Colts"
      }, {
        league: 'OHL',
        value: "ERE",
        text: "Erie Otters"
      }, {
        league: 'OHL',
        value: "FLI",
        text: "Flint Firebirds"
      }, {
        league: 'OHL',
        value: "GUE",
        text: "Guelph Storm"
      }, {
        league: 'OHL',
        value: "HAM",
        text: "Hamilton Bulldogs"
      }, {
        league: 'OHL',
        value: "KIN",
        text: "Kingston Frontenacs"
      }, {
        league: 'OHL',
        value: "KIT",
        text: "Kitchener Rangers"
      }, {
        league: 'OHL',
        value: "LON",
        text: "London Knights"
      }, {
        league: 'OHL',
        value: "MIS",
        text: "Mississauga Steelheads"
      }, {
        league: 'OHL',
        value: "NIA",
        text: "Niagara IceDogs"
      }, {
        league: 'OHL',
        value: "NOB",
        text: "North Bay Battalion"
      }, {
        league: 'OHL',
        value: "OSH",
        text: "Oshawa Generals"
      }, {
        league: 'OHL',
        value: "OTT",
        text: "Ottawa 67's"
      }, {
        league: 'OHL',
        value: "OWE",
        text: "Owen Sound Attack"
      }, {
        league: 'OHL',
        value: "PET",
        text: "Peterborough Petes"
      }, {
        league: 'OHL',
        value: "SAG",
        text: "Saginaw Spirit"
      }, {
        league: 'OHL',
        value: "SAR",
        text: "Sarnia Sting"
      }, {
        league: 'OHL',
        value: "SSM",
        text: "Sault Ste. Marie Greyhounds"
      }, {
        league: 'OHL',
        value: "SUD",
        text: "Sudbury Wolves"
      }, {
        league: 'OHL',
        value: "WIN",
        text: "Windsor Spitfires"
      }, {
        league: 'QMJHL',
        value: "ACA",
        text: "Acadie-Bathurst Titan"
      }, {
        league: 'QMJHL',
        value: "BAI",
        text: "Baie-Comeau Drakkar"
      }, {
        league: 'QMJHL',
        value: "BLA",
        text: "Blainville-Boisbriand Armada"
      }, {
        league: 'QMJHL',
        value: "CB",
        text: "Cape Breton Screaming Eagles"
      }, {
        league: 'QMJHL',
        value: "CHR",
        text: "Charlottetown Islanders"
      }, {
        league: 'QMJHL',
        value: "CHC",
        text: "Chicoutimi Sagueneens"
      }, {
        league: 'QMJHL',
        value: "DRU",
        text: "Drummondville Voltigeurs"
      }, {
        league: 'QMJHL',
        value: "GAT",
        text: "Gatineau Olympiques"
      }, {
        league: 'QMJHL',
        value: "HFX",
        text: "Halifax Mooseheads"
      }, {
        league: 'QMJHL',
        value: "MON",
        text: "Moncton Wildcats"
      }, {
        league: 'QMJHL',
        value: "QUE",
        text: "Quebec Remparts"
      }, {
        league: 'QMJHL',
        value: "RIM",
        text: "Rimouski Oceanic"
      }, {
        league: 'QMJHL',
        value: "ROU",
        text: "Rouyn-Noranda Huskies"
      }, {
        league: 'QMJHL',
        value: "STJ",
        text: "Saint John Sea Dogs"
      }, {
        league: 'QMJHL',
        value: "SHA",
        text: "Shawinigan Cataractes"
      }, {
        league: 'QMJHL',
        value: "SHE",
        text: "Sherbrooke Phoenix"
      }, {
        league: 'QMJHL',
        value: "VAL",
        text: "Val-D'Or Foreurs"
      }, {
        league: 'QMJHL',
        value: "VIC",
        text: "Victoriaville Tigres"
      }, {
        league: 'WHL',
        value: "BRA",
        text: "Brandon Wheat Kings"
      }, {
        league: 'WHL',
        value: "CGY",
        text: "Calgary Hitmen"
      }, {
        league: 'WHL',
        value: "EDM",
        text: "Edmonton Oil Kings"
      }, {
        league: 'WHL',
        value: "EVE",
        text: "Everett Silvertips"
      }, {
        league: 'WHL',
        value: "KAM",
        text: "Kamloops Blazers"
      }, {
        league: 'WHL',
        value: "KEL",
        text: "Kelowna Rockets"
      }, {
        league: 'WHL',
        value: "LET",
        text: "Lethbridge Hurricanes"
      }, {
        league: 'WHL',
        value: "MED",
        text: "Medicine Hat Tigers"
      }, {
        league: 'WHL',
        value: "MOO",
        text: "Moose Jaw Warriors"
      }, {
        league: 'WHL',
        value: "POR",
        text: "Portland Winter Hawks"
      }, {
        league: 'WHL',
        value: "PRA",
        text: "Prince Albert Raiders"
      }, {
        league: 'WHL',
        value: "PRG",
        text: "Prince George Cougars"
      }, {
        league: 'WHL',
        value: "RED",
        text: "Red Deer Rebels"
      }, {
        league: 'WHL',
        value: "REG",
        text: "Regina Pats"
      }, {
        league: 'WHL',
        value: "SAS",
        text: "Saskatoon Blades"
      }, {
        league: 'WHL',
        value: "SEA",
        text: "Seattle Thunderbirds"
      }, {
        league: 'WHL',
        value: "SPO",
        text: "Spokane Chiefs"
      }, {
        league: 'WHL',
        value: "SWC",
        text: "Swift Current Broncos"
      }, {
        league: 'WHL',
        value: "TRI",
        text: "Tri-City Americans"
      }, {
        league: 'WHL',
        value: "VAN",
        text: "Vancouver Giants"
      }, {
        league: 'WHL',
        value: "VIC",
        text: "Victoria Royals"
      }, {
        league: 'WHL',
        value: "WPI",
        text: "Winnipeg Ice"
      }, {
        league: 'SHL',
        value: "BRY",
        text: "Brynas IF"
      }, {
        league: 'SHL',
        value: "DJU",
        text: "Djugardens Hockey"
      }, {
        league: 'SHL',
        value: "FAR",
        text: "Farjestad BK"
      }, {
        league: 'SHL',
        value: "FRO",
        text: "Frolunda Indians"
      }, {
        league: 'SHL',
        value: "HV",
        text: "HV71"
      }, {
        league: 'SHL',
        value: "OSK",
        text: "IK Oskarshamn"
      }, {
        league: 'SHL',
        value: "LEK",
        text: "Leksands IF"
      }, {
        league: 'SHL',
        value: "LIN",
        text: "Linkopings HC"
      }, {
        league: 'SHL',
        value: "LUL",
        text: "Lulea Hockey"
      }, {
        league: 'SHL',
        value: "MAL",
        text: "Malmo Redhawks"
      }, {
        league: 'SHL',
        value: "ORE",
        text: "Orebro Hockey"
      }, {
        league: 'SHL',
        value: "ROG",
        text: "Rogle BK"
      }, {
        league: 'SHL',
        value: "SKE",
        text: "Skelleftea AK"
      }, {
        league: 'SHL',
        value: "VAX",
        text: "Vaxjo Lakers"
      }, {
        league: 'Liiga',
        value: "HEL",
        text: "Helsingin IFK"
      }, {
        league: 'Liiga',
        value: "HAM",
        text: "HPK Hameenlinna"
      }, {
        league: 'Liiga',
        value: "JYV",
        text: "JYP Jyvaskyla"
      }, {
        league: 'Liiga',
        value: "KAL",
        text: "KalPa Kuopio"
      }, {
        league: 'Liiga',
        value: "KOO",
        text: "KooKoo Kouvala"
      }, {
        league: 'Liiga',
        value: "MIK",
        text: "Mikkelin Jukurit"
      }, {
        league: 'Liiga',
        value: "OUL",
        text: "Oulun Karpat"
      }, {
        league: 'Liiga',
        value: "LAH",
        text: "Pelicans Lahti"
      }, {
        league: 'Liiga',
        value: "POA",
        text: "Porin Assat"
      }, {
        league: 'Liiga',
        value: "RAU",
        text: "Rauman Lukko"
      }, {
        league: 'Liiga',
        value: "LAP",
        text: "SaiPa Lappeenranta"
      }, {
        league: 'Liiga',
        value: "TAI",
        text: "Tampereen Ilves"
      }, {
        league: 'Liiga',
        value: "TAT",
        text: "Tampereen Tappara"
      }, {
        league: 'Liiga',
        value: "TUR",
        text: "TPS Turku"
      }, {
        league: 'Liiga',
        value: "VAA",
        text: "Vaasan Sport"
      }, {
        league: 'NL',
        value: "EHC",
        text: "EHC Biel"
      }, {
        league: 'NL',
        value: "EV",
        text: "EV Zug"
      }, {
        league: 'NL',
        value: "GES",
        text: "Geneve-Servette HC"
      }, {
        league: 'NL',
        value: "AMP",
        text: "HC Ambri-Piotta"
      }, {
        league: 'NL',
        value: "DAV",
        text: "HC Davos"
      }, {
        league: 'NL',
        value: "FRG",
        text: "HC Fribourg-Gotteron"
      }, {
        league: 'NL',
        value: "LAU",
        text: "HC Lausanne"
      }, {
        league: 'NL',
        value: "LUG",
        text: "HC Lugano"
      }, {
        league: 'NL',
        value: "RAJ",
        text: "Rapperswil-Jona Lakers"
      }, {
        league: 'NL',
        value: "BER",
        text: "SC Bern"
      }, {
        league: 'NL',
        value: "SCL",
        text: "SCL Tigers"
      }, {
        league: 'NL',
        value: "ZSC",
        text: "ZSC Lions"
      }, {
        league: 'DEL',
        value: "ADL",
        text: "Adler Mannheim"
      }, {
        league: 'DEL',
        value: "AUG",
        text: "Augsburger Panther"
      }, {
        league: 'DEL',
        value: "DUS",
        text: "Dusseldorfer EG"
      }, {
        league: 'DEL',
        value: "MUN",
        text: "EHC Munchen"
      }, {
        league: 'DEL',
        value: "BER",
        text: "Eisbaren Berlin"
      }, {
        league: 'DEL',
        value: "ING",
        text: "ERC Ingolstadt"
      }, {
        league: 'DEL',
        value: "FIP",
        text: "Fischtown Pinguins"
      }, {
        league: 'DEL',
        value: "WOL",
        text: "Grizzly Adams Wolfsburg"
      }, {
        league: 'DEL',
        value: "ISE",
        text: "Iserlohn Roosters"
      }, {
        league: 'DEL',
        value: "KOL",
        text: "Kolner Haie"
      }, {
        league: 'DEL',
        value: "KRE",
        text: "Krefeld Pinguine"
      }, {
        league: 'DEL',
        value: "SWW",
        text: "Schwenninger Wild Wings"
      }, {
        league: 'DEL',
        value: "STR",
        text: "Straubing Tigers"
      }, {
        league: 'DEL',
        value: "THO",
        text: "Thomas Sabo Ice Tigers"
      }, {
        league: 'EBEL',
        value: "LBW",
        text: "Black Wings Linz"
      }, {
        league: 'EBEL',
        value: "DOB",
        text: "Dornbirner EC"
      }, {
        league: 'EBEL',
        value: "KAC",
        text: "EC KAC"
      }, {
        league: 'EBEL',
        value: "VSV",
        text: "EC VSV"
      }, {
        league: 'EBEL',
        value: "MMG",
        text: "Graz 99ers"
      }, {
        league: 'EBEL',
        value: "TWK",
        text: "HC TWK Innsbruck"
      }, {
        league: 'EBEL',
        value: "SUD",
        text: "HCB Sudtirol Alperia"
      }, {
        league: 'EBEL',
        value: "ORZ",
        text: "Orli Znojmo"
      }, {
        league: 'EBEL',
        value: "RBS",
        text: "Red Bull Salzburg"
      }, {
        league: 'EBEL',
        value: "FEH",
        text: "SAPA Fehervar AV 19"
      }, {
        league: 'EBEL',
        value: "VIE",
        text: "Vienna Capitals"
      }, {
        league: 'CHL',
        value: "BAN",
        text: "Banksa Bystrica"
      }, {
        league: 'CHL',
        value: "BEL",
        text: "Belfast Giants"
      }, {
        league: 'CHL',
        value: "CAR",
        text: "Cardiff Devils"
      }, {
        league: 'CHL',
        value: "FRI",
        text: "Frisk Asker"
      }, {
        league: 'CHL',
        value: "GKS",
        text: "GKS Tychy"
      }, {
        league: 'CHL',
        value: "GRN",
        text: "Grenoble Bruleurs de Loups"
      }, {
        league: 'CHL',
        value: "RUN",
        text: "Rungsted Seier Capital"
      }, {
        league: 'CHL',
        value: "MIN",
        text: "Yunost Minsk"
      }, {
        league: 'ELH',
        value: "PSG",
        text: "Aukro Berani Zlin"
      }, {
        league: 'ELH',
        value: "TYG",
        text: "Bili Tygri Liberec"
      }, {
        league: 'ELH',
        value: "MLA",
        text: "BK Mlada Boleslav"
      }, {
        league: 'ELH',
        value: "PAR",
        text: "Dynamo Pardubice"
      }, {
        league: 'ELH',
        value: "KRL",
        text: "HC Energie Karlovy Vary"
      }, {
        league: 'ELH',
        value: "OLO",
        text: "HC Olomouc"
      }, {
        league: 'ELH',
        value: "SKO",
        text: "HC Skoda Plzen"
      }, {
        league: 'ELH',
        value: "VIT",
        text: "HC Vitkovice Steel"
      }, {
        league: 'ELH',
        value: "BRN",
        text: "Kometa Brno"
      }, {
        league: 'ELH',
        value: "MTF",
        text: "Mountfield HK"
      }, {
        league: 'ELH',
        value: "TRI",
        text: "Ocelari Trinec"
      }, {
        league: 'ELH',
        value: "KLD",
        text: "Rytiri Kladno"
      }, {
        league: 'ELH',
        value: "SPA",
        text: "Sparta Praha"
      }, {
        league: 'ELH',
        value: "VER",
        text: "Verva Litvinov"
      }, {
        league: 'Allsvenska',
        value: "AIK",
        text: "AIK"
      }, {
        league: 'Allsvenska',
        value: "AIS",
        text: "Almtuna IS"
      }, {
        league: 'Allsvenska',
        value: "BIK",
        text: "BIK Karlskoga"
      }, {
        league: 'Allsvenska',
        value: "VIT",
        text: "HC Vita Hasten"
      }, {
        league: 'Allsvenska',
        value: "BJO",
        text: "IF Bjorkloven"
      }, {
        league: 'Allsvenska',
        value: "KHK",
        text: "Karlskrona HK"
      }, {
        league: 'Allsvenska',
        value: "KRI",
        text: "Kristianstad IK"
      }, {
        league: 'Allsvenska',
        value: "MOD",
        text: "MODO Hockey"
      }, {
        league: 'Allsvenska',
        value: "MOR",
        text: "Mora IK"
      }, {
        league: 'Allsvenska',
        value: "SOD",
        text: "Sodertalje SK"
      }, {
        league: 'Allsvenska',
        value: "TIM",
        text: "Timra IK"
      }, {
        league: 'Allsvenska',
        value: "TIN",
        text: "Tingsryds AIF"
      }, {
        league: 'Allsvenska',
        value: "VIK",
        text: "Vasterviks IK"
      }, {
        league: 'Allsvenska',
        value: "VAS",
        text: "VIK Vasteras HK"
      }, {
        league: 'National',
        value: "AUS",
        text: "Austria"
      }, {
        league: 'National',
        value: "CAN",
        text: "Canada"
      }, {
        league: 'National',
        value: "CZE",
        text: "Czech Republic"
      }, {
        league: 'National',
        value: "DEN",
        text: "Denmark"
      }, {
        league: 'National',
        value: "FIN",
        text: "Finland"
      }, {
        league: 'National',
        value: "FRA",
        text: "France"
      }, {
        league: 'National',
        value: "GER",
        text: "Germany"
      }, {
        league: 'National',
        value: "GRE",
        text: "Great Britain"
      }, {
        league: 'National',
        value: "ITL",
        text: "Italy"
      }, {
        league: 'National',
        value: "LAT",
        text: "Latvia"
      }, {
        league: 'National',
        value: "NOR",
        text: "Norway"
      }, {
        league: 'National',
        value: "RUS",
        text: "Russia"
      }, {
        league: 'National',
        value: "SLO",
        text: "Slovakia"
      }, {
        league: 'National',
        value: "SWE",
        text: "Sweden"
      }, {
        league: 'National',
        value: "SZL",
        text: "Switzerland"
      }, {
        league: 'National',
        value: "UKR",
        text: "Ukraine"
      }, {
        league: 'National',
        value: "USA",
        text: "United States of America"
      }],
      minOvr: '',
      maxOvr: '',
      team: 'Any',
      playerType: [],
      per_page: 100,
      card: [],
      card_example: null,
      minWgt: '',
      maxWgt: '',
      synergy_id: [],
      nationality: 'Any',
      results: ''
    };
  },
  created: function created() {
    this.leagueOptions = this.leagueOptions19;
  },
  methods: {
    getFilteredTeams: function getFilteredTeams() {
      var _this = this;

      return this.all_teams.filter(function (item) {
        return item.league == _this.league;
      });
    },
    getSynergy: function getSynergy() {
      var year = this.year ? 19 : 20;
      return this.synergyLabels.filter(function (s) {
        return s.year == year;
      });
    },
    message: function message(title, _message, type) {
      this.$notify({
        group: 'main',
        type: type,
        title: title,
        text: _message
      });
    },
    addCard: function addCard(card) {
      this.$emit('card', card);
    },
    show: function show(name) {
      this.$modal.show(name);
    },
    hide: function hide(name) {
      this.$modal.hide(name);
    },
    getCard: function getCard(id) {
      var _this2 = this;

      this.$loading(true);
      this.request = "https://api.hutdb.net/api/players/".concat(id);
      axios.post('search', {
        url: this.request
      }).then(function (res) {
        console.log(res);
        _this2.card_example = res.data;

        _this2.$loading(false);

        _this2.show("card");
      })["catch"](function (err) {
        console.log(err);

        _this2.$loading(false);

        _this2.message("Ошибка загрузки карточки", "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!", 'error');
      });
    },
    search: function search() {
      var _this3 = this;

      this.$loading(true);
      this.makeUrl();
      axios.post('search', {
        url: this.request
      }).then(function (res) {
        _this3.results = res.data;

        _this3.results.shift();

        _this3.$loading(false);
      })["catch"](function (err) {
        _this3.message("Ошибка поиска", "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!", 'error');

        _this3.$loading(false);

        console.log(err);
      });
    },
    makeUrl: function makeUrl() {
      var _this4 = this;

      var year = this.year ? 19 : 20;
      this.request = "https://api.hutdb.net/api/players?year=".concat(year, "&page=0&per_age=").concat(this.per_page);

      if (this.playerName !== '') {
        var player = this.playerName.replace(' ', '%20');
        this.request += "&playerName=".concat(player);
      }

      if (this.league !== 'Any') {
        this.request += "&league=".concat(this.league);
      }

      if (this.position.length > 0) {
        this.request += "&position[]=";
        this.position.map(function (pos) {
          _this4.request += "".concat(pos, ",");
        });
        this.request = this.request.slice(0, -1);
      }

      if (this.handedness != 'Any' && this.handedness != '') {
        this.request += "&handedness=".concat(this.handedness);
      }

      if (this.height.length > 0 && this.height.indexOf("Any") == -1) {
        this.request += "&height[]=";
        this.height.map(function (h) {
          _this4.request += "".concat(h, ",");
        });
        this.request = this.request.slice(0, -1);
      }

      if (this.synergy.length > 0) {
        console.log("synergy", this.synergy);
        this.request += "&synergy_id[]=";
        this.synergy.map(function (syn) {
          _this4.request += "".concat(syn, ",");
        });
        this.request = this.request.slice(0, -1);
      }

      if (this.minOvr !== '') {
        this.request += "&minOvr=".concat(this.minOvr);
      }

      if (this.maxOvr !== '') {
        this.request += "&maxOvr=".concat(this.maxOvr);
      }

      if (this.team !== 'Any') {
        this.request += "&team=".concat(this.team);
      }

      if (this.playerType.length > 0) {
        this.request += "&playerType[]=";
        this.playerType.map(function (type) {
          _this4.request += "".concat(type, ",");
        });
        this.request = this.request.slice(0, -1);
      }

      if (this.card.length > 0) {
        this.request += "&card=".concat(this.card);
      }

      if (this.minWgt !== '') {
        this.request += "&minWgt=".concat(this.minWgt);
      }

      if (this.maxWgt !== '') {
        this.request += "&maxWgt=".concat(this.maxWgt);
      }

      if (this.nationality !== 'Any') {
        this.request += "&nationality=".concat(this.nationality);
      }

      console.log(this.request);
    },
    checkYear: function checkYear(event) {
      this.year = event;
      this.leagueOptions = event ? this.leagueOptions19 : this.leagueOptions20;
      this.results = [];
    }
  },
  components: {
    Toggle: _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Card: _components_admin_CardHUTDB_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=template&id=ccddb99c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=template&id=ccddb99c& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "search-form" }, [
        _c("div", { staticClass: "row ff" }, [
          _c(
            "div",
            { staticClass: "col-6" },
            [
              _c(
                "label",
                { staticClass: "col-form-label", attrs: { for: "year" } },
                [_vm._v("Year")]
              ),
              _vm._v(" "),
              _c("toggle", {
                attrs: {
                  check: _vm.year,
                  id: "year",
                  labelon: "2019",
                  labeloff: "2020",
                  width: 140
                },
                on: {
                  check: function($event) {
                    return _vm.checkYear($event)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "per_page" } },
              [_vm._v("Max elements")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.per_page,
                    expression: "per_page"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "per_page" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.per_page = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "100", selected: "" } }, [
                  _vm._v("100")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "75" } }, [_vm._v("75")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "10" } }, [_vm._v("10")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 player" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "player" } },
              [_vm._v("Player")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.playerName,
                  expression: "playerName",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-control",
              attrs: { id: "player" },
              domProps: { value: _vm.playerName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.playerName = $event.target.value.trim()
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "minOvr" } },
              [_vm._v("Ovrmin")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.minOvr,
                  expression: "minOvr",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control",
              attrs: { id: "minOvr" },
              domProps: { value: _vm.minOvr },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.minOvr = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "maxOvr" } },
              [_vm._v("Ovrmax")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.maxOvr,
                  expression: "maxOvr",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control",
              attrs: { id: "maxOvr" },
              domProps: { value: _vm.maxOvr },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.maxOvr = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "league" } },
              [_vm._v("League")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.league,
                    expression: "league"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "league" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.league = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _vm._l(_vm.leagueOptions, function(leag) {
                  return _c("option", { domProps: { value: leag } }, [
                    _vm._v(_vm._s(leag))
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "team" } },
              [_vm._v("Team")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.team,
                    expression: "team"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "team" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.team = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _vm._l(_vm.getFilteredTeams(), function(team) {
                  return _c("option", { domProps: { value: team.value } }, [
                    _vm._v(_vm._s(team.text))
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "position" } },
              [_vm._v("Position")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.position,
                    expression: "position"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "position", multiple: "multiple" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.position = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "LW" } }, [_vm._v("Left Wing")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "C" } }, [_vm._v("Center")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "RW" } }, [
                  _vm._v("Right Wing")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "LD" } }, [
                  _vm._v("Left Defensemen")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "RD" } }, [
                  _vm._v("Right Defensemen")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "playerType" } },
              [_vm._v("Type")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.playerType,
                    expression: "playerType"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "playerType", multiple: "multiple" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.playerType = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "PLY" } }, [
                  _vm._v("Playmaker")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "PWF" } }, [
                  _vm._v("Power Forward")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "TWF" } }, [
                  _vm._v("Two-Way Forward")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "TWD" } }, [
                  _vm._v("Two-Way Defensemen")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "OFD" } }, [
                  _vm._v("Offenive Defensemen")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "SNP" } }, [_vm._v("Sniper")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "DFD" } }, [
                  _vm._v("Defensive Defesemen")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "GRN" } }, [_vm._v("Grinder")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "ENF" } }, [_vm._v("Enforcer")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "handedness" } },
              [_vm._v("Shoots")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.handedness,
                    expression: "handedness"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "handedness" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.handedness = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "Any", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _c("option", [_vm._v("Left")]),
                _vm._v(" "),
                _c("option", [_vm._v("Right")])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "height" } },
              [_vm._v("Height")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.height,
                    expression: "height"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "height", multiple: "multiple" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.height = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { selected: "" } }, [_vm._v("Any")]),
                _vm._v(" "),
                _vm._l(_vm.heightLabels, function(h) {
                  return _c("option", { domProps: { value: h.id } }, [
                    _vm._v(_vm._s(h.name))
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "synergy" } },
              [_vm._v("Synergy")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.synergy,
                    expression: "synergy"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "synergy", multiple: "multiple" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.synergy = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.getSynergy(), function(syn) {
                return _c("option", { domProps: { value: syn.id } }, [
                  _vm._v(_vm._s(syn.name))
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "card" } },
              [_vm._v("Card")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.card,
                    expression: "card"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "card", multiple: "multiple" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.card = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "Gold" } }, [_vm._v("Gold")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "Silver" } }, [
                  _vm._v("Silver")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "Bronze" } }, [
                  _vm._v("Bronze")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "PT" } }, [_vm._v("Primetime")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "TOTW" } }, [
                  _vm._v("Team of the Week")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "HTH" } }, [
                  _vm._v("Hometown Hero")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "sICON" } }, [
                  _vm._v("Standard Icon")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "ICON" } }, [
                  _vm._v("Master Icon")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "Global" } }, [
                  _vm._v("Global")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "CLS" } }, [_vm._v("Classic")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "mspCLS" } }, [
                  _vm._v("MSP - Classic")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "FAN" } }, [
                  _vm._v("Fantasy Hockey")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "mspFAN" } }, [
                  _vm._v("MSP - Fantasy Hockey")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-3" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "wgtmin" } },
              [_vm._v("Weight min")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.minWgt,
                  expression: "minWgt",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control",
              attrs: { id: "wgtmin" },
              domProps: { value: _vm.minWgt },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.minWgt = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "wgtmax" } },
              [_vm._v("Weight max")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.maxWgt,
                  expression: "maxWgt",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control",
              attrs: { id: "wgtmax" },
              domProps: { value: _vm.maxWgt },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.maxWgt = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "nationality" } },
              [_vm._v("Nationality")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nationality,
                    expression: "nationality"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "nationality" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.nationality = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Any")
                ]),
                _vm._v(" "),
                _vm._l(_vm.nationalityOptions, function(n) {
                  return _c("option", { domProps: { value: n } }, [
                    _vm._v(_vm._s(n))
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5 mb-5" }, [
          _c("div", { staticClass: "col-12 d-flex justify-content-center" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    return _vm.search()
                  }
                }
              },
              [_vm._v("Search")]
            )
          ])
        ]),
        _vm._v(" "),
        _vm.results != ""
          ? _c("table", { staticClass: "table table-striped table-lg" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.results, function(result) {
                  return _c("tr", { key: result.id }, [
                    _c(
                      "td",
                      {
                        staticStyle: { cursor: "pointer" },
                        on: {
                          click: function($event) {
                            return _vm.getCard(result.id)
                          }
                        }
                      },
                      [_c("span", [_vm._v(_vm._s(result.id))])]
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(result.league))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(result.team))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(result.player))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(result.salary))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(result.ovr))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info",
                          on: {
                            click: function($event) {
                              return _vm.addCard(result)
                            }
                          }
                        },
                        [_vm._v("Выбрать")]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { name: "card", width: "100%", height: "100%" } },
        [
          _c("a", {
            staticClass: "close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.hide("card")
              }
            }
          }),
          _vm._v(" "),
          _c("card", { attrs: { card: _vm.card_example } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Card")]),
      _vm._v(" "),
      _c("th", [_vm._v("League")]),
      _vm._v(" "),
      _c("th", [_vm._v("Team")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Salary")]),
      _vm._v(" "),
      _c("th", [_vm._v("OVR")]),
      _vm._v(" "),
      _c("th", [_vm._v("Действие")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/CardSearchHUTDB.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/CardSearchHUTDB.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardSearchHUTDB_vue_vue_type_template_id_ccddb99c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSearchHUTDB.vue?vue&type=template&id=ccddb99c& */ "./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=template&id=ccddb99c&");
/* harmony import */ var _CardSearchHUTDB_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSearchHUTDB.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardSearchHUTDB_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardSearchHUTDB_vue_vue_type_template_id_ccddb99c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardSearchHUTDB_vue_vue_type_template_id_ccddb99c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/CardSearchHUTDB.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSearchHUTDB_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardSearchHUTDB.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSearchHUTDB_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=template&id=ccddb99c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=template&id=ccddb99c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSearchHUTDB_vue_vue_type_template_id_ccddb99c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardSearchHUTDB.vue?vue&type=template&id=ccddb99c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CardSearchHUTDB.vue?vue&type=template&id=ccddb99c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSearchHUTDB_vue_vue_type_template_id_ccddb99c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSearchHUTDB_vue_vue_type_template_id_ccddb99c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);