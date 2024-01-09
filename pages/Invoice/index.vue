<style>
      .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        line-height: 24px;
        font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
        color: #555;
      }

      .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
      }

      .invoice-box table td {
        padding: 5px;
        vertical-align: top;
      }

      .invoice-box table tr td:nth-child(2) {
        text-align: right;
      }

      .invoice-box table tr.top table td {
        padding-bottom: 20px;
      }

      .invoice-box table tr.top table td.title {
        font-size: 35px;
        line-height: 1px;
        color: #333;
      }

      .invoice-box table tr.information table td {
        padding-bottom: 40px;
      }

      .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
      }

      .invoice-box table tr.details td {
        padding-bottom: 20px;
      }

      .invoice-box table tr.item td {
        border-bottom: 1px solid #eee;
      }

      .invoice-box table tr.item.last td {
        border-bottom: none;
      }

      .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
      }

      @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
          width: 100%;
          display: block;
          text-align: center;
        }

        .invoice-box table tr.information table td {
          width: 100%;
          display: block;
          text-align: center;
        }
      }

      /** RTL **/
      .invoice-box.rtl {
        direction: rtl;
        font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
          sans-serif;
      }

      .invoice-box.rtl table {
        text-align: right;
      }

      .invoice-box.rtl table tr td:nth-child(2) {
        text-align: left;
      }

      .button-download {
        background-color: #323232;
        border: none;
        color: white;
        padding: 10px 30px;
        margin-top: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 4px;
      }
    </style>
<template>
    <div class="invoice-box">
      <table cellpadding="0" cellspacing="0">
        <tr class="top">
          <td colspan="2">
            <table>
              <tr>
                <td class="title">
                  <h4>GAMA</h4>
                  <p>Your Virtual Guide</p>
                </td>

                <td>
                  Invoice #: 001<br />
                  Created: January 1, 2024<br />
                  Status: <b>Paid</b>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr class="information">
          <td colspan="2">
            <table>
              <tr>
                <td>
                  Rosalinda.<br />
                  lindaros@gmail.com<br />
                  081298153162
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr class="heading">
          <td>Metode Pembayaran</td>

          <td>#</td>
        </tr>

        <tr class="details">
          <td>Transfer bank - BCA</td>

          <td>1605049631</td>
        </tr>

        <tr class="heading">
          <td>Tujuan</td>

          <td>Harga</td>
        </tr>

        <tr class="item">
          <td>Guide Bandung (5 hari)</td>

          <td>Rp. 500.000.00</td>
        </tr>

        <tr class="total">
          <td></td>

          <td>Total: Rp. 500.000.00</td>
        </tr>
      </table>

      <button class="button-download">Download</button>
    </div>
</template>