<html>

<head>
    <title>
        CW - Crypto Workshop
    </title>
    <link rel="stylesheet" href="cryptostyle.css">

    <link rel="icon" href="images/cwicon.png" type="image/ico">
</head>

<body>
    <div id="main-div">


        <div id="header">
            <div id='mainlogo'><img src='images/CW v2.png' height='127'></div>
            <div id="btc" class='top-cur-block'>
                <div class='logo'><img src="images/btclogo.webp"></div>
                <div class='price'>
                    <p class='price' id='btcprice'>-----</p>
                </div>
            </div>
            <div id="eth" class='top-cur-block'>
                <div class='logo'><img src="images/eth.webp"></div>
                <div class='price'>
                    <p class='price' id='ethprice'>----</p>
                </div>
            </div>
            <div id="xmr" class='top-cur-block'>
                <div class='logo'><img src="images/monero.webp"></div>
                <div class='price'>
                    <p class='price' id='xmrprice'>--- </p>
                </div>
            </div>


        </div>
        <div id="main-section">
            <div id="left">
                <div id="video-card-select">

                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="A2000-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('A2000')" onmouseover="cryptohover('A2000')" onmouseout="unhover('A2000')" id="A2000-btn">A2000</button>
                        </span>
                    </div>

                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3070-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3070')" onmouseover="cryptohover('3070')" onmouseout="unhover('3070')" id="3070-btn">3070</button>
                        </span>
                    </div>

                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3080TI-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3080TI')" onmouseover="cryptohover('3080TI')" onmouseout="unhover('3080TI')" id="3080TI-btn">3080TI</button>
                        </span>
                    </div>
                    <br>

                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3060-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3060')" onmouseover="cryptohover('3060')" onmouseout="unhover('3060')" id="3060-btn">3060</button>
                        </span>
                    </div>

                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3070TI-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3070TI')" onmouseover="cryptohover('3070TI')" onmouseout="unhover('3070TI')" id="3070TI-btn">3070TI</button>
                        </span>
                    </div>
                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3090-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3090')" onmouseover="cryptohover('3090')" onmouseout="unhover('3090')" id="3090-btn">3090</button>
                        </span>
                    </div>
                    <br>
                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3060TI-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3060TI')" onmouseover="cryptohover('3060TI')" onmouseout="unhover('3060TI')" id="3060TI-btn">3060TI</button>
                        </span>
                    </div>
                    <div class="adapter">
                        <span>
                            <input type="text" placeholder="0" class="adapter-qty" id="3080-qty" oninput="recalculate()">
                        </span>
                        <span>
                            <button class="adapter-btn" onclick="recalculate('3080')" onmouseover="cryptohover('3080')" onmouseout="unhover('3080')" id="3080-btn">3080</button>
                        </span>
                    </div>
                    <div class="adapter">
                        <select id="algo-selector" name="algo-selector" onchange="recalculate()">
                            <option value="eth" class="algo-option" selected="selected">Etherium</option>
                            <option value="rvn" class="algo-option">Raven</option>
                            <option value="sero" class="algo-option">SERO</option>
                            <option value="swp" class="algo-option">SWAP</option>
                            <option value="yec" class="algo-option">YCash</option>
                        </select>
                    </div>
                    <br>
                    <div id="provider-div">
                        <select id="provider" name="Provider" id="Provider">
                            <option value="pro" class="provider-option" selected="selected">Energo-Pro</option>
                            <option value="evn" class="provider-option">EVN</option>
                            <option value="cez" class="provider-option">CEZ</option>

                        </select>
                    </div>
                    <div id="ele-price-div">
                    <input type="text" id="ele-price">
                    </div>
                    <div id="calc-div">
                        <input type="submit" id="calc-btn" value="Calculate!"></input>
                    </div>
                    <div id="calculated-parameters">
                        <div id="hashrate-div" class="calc-params-block">
                            <input type="text" class="calc-params-input" id="hashrate" placeholder=0>
                            <button class="calc-params-btn" id="hashrate-btn">Mh/s</button>
                        </div>
                        <div id="consumtion-div" class="calc-params-block">
                            <input type="text" class="calc-params-input" id="consumption" placeholder=0>
                            <button class="calc-params-btn" id="consumption-btn">W</button>
                        </div>

                    </div>
                </div>
            </div>

            <div id="profit-monitor">
                <table id="profit-table">
                    <caption class="text-center">Estimated Rewards</caption>
                    <thead>
                        <tr>
                            <th class="table-header">Per</th>
                            <th class="table-header">Revenue</th>
                            <th class="table-header">Cost</th>
                            <th class="table-header">Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Hour
                            </td>
                            <td class="table-text">
                                <span>1.14 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>0.29 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>0.84 лв.</span>
                            </td>
                        </tr>
                        <tr class="table-active">
                            <td>
                                Day
                            </td>
                            <td class="table-text">
                                <span title="">27.30 лв.</span>
                            </td>
                            <td class="table-text">
                                <span title="">7.07 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>20.23 лв.</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Week
                            </td>
                            <td class="table-text">
                                <span>191.07 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>49.46 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>141.61 лв.</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Month
                            </td>
                            <td class="table-text">
                                <span >818.87 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>211.97 лв.</span>
                            </td>
                            <td class="table-text">
                                <span>606.90 лв.</span>
                            </td>
                        </tr>



                    </tbody>
                </table>








            </div>
        </div>

        <!-- <script type="text/javascript" src="minerStats.js"></script> -->
        <script type="text/javascript" src="marketStats.js"></script>
        <script type="text/javascript" src="providers.js"></script>
        <script type="text/javascript" src="recalculate.js"></script>
        <script type="text/javascript" src="cryptohover.js"></script>
        <script type="text/javascript" src="unhover.js"></script>


</body>

</html>