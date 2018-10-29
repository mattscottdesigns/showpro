import React, { Component } from 'react';

class SampleEmail extends Component {
    render() {
        return (
            <table width="100%" cellPadding={0} cellSpacing={0} id="container-email" style={{borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5, width: '100%'}}>
        <tbody>
          <tr>
            <td>
              <table width={600} cellPadding={0} cellSpacing={0} align="center" id="container-content" style={{backgroundColor: '#ffffff', border: '1px solid #eeeeee', borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5, maxWidth: 600, width: 600}}>
                <tbody>
                  <tr>
                    <td className="padding-sm text-center" style={{padding: 5, textAlign: 'center'}}>
                      <img width={600} className="responsive" src="https://register.xpressreg.net/EventResourceService/59/images/ff8a96b4-59a2-4a3a-abb9-5be020a1a597" />
                    </td>
                  </tr>
                  <tr>
                    <td className="padding-top-lg text-center" style={{paddingTop: 15, textAlign: 'center'}}>
                      <img src="https://qa.xpressreg.net/BC_Images/barcode.php?bc=00" style={{verticalAlign: 'middle'}} />
                      <br style={{lineHeight: '110%'}} />
                      <br style={{lineHeight: '110%'}} />
                      <b>Badge:</b> 0
                      <br style={{lineHeight: '110%'}} />
                      <span className="help" style={{color: '#999', fontSize: 13}}>If you have any trouble viewing the barcode image please
                        <a href="https://qa.xpressreg.net/barcode/barcodepage.asp?db=CDSM0118&b=0&logo=https://register.xpressreg.net/EventResourceService/59/images/ff8a96b4-59a2-4a3a-abb9-5be020a1a597" target="_blank" style={{color: '#999', fontSize: 13}}>click&nbsp;here</a>.</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding-left-lg padding-right-lg padding-top-xl" style={{paddingLeft: 15, paddingRight: 15, paddingTop: 20}}>
                      Dear First Last:
                      <br style={{lineHeight: '110%'}} />
                      <br style={{lineHeight: '110%'}} /> Thank you for registering to attend Master Medical 2018, 1/1/2018 12:00:00 AM - 1/4/2018 12:00:00 PM at the . This
                      email is your confirmation and serves as your invoice/receipt. If you would like to register a colleague, please
                      click here.
                      <br style={{lineHeight: '110%'}} />
                      <br style={{lineHeight: '110%'}} />
                      <table width="100%" cellPadding={0} cellSpacing={0} style={{borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5}}>
                        <tbody>
                          <tr>
                            <td className="isSectionHeaderLev1" style={{backgroundColor: '#474c56', color: '#ffffff', fontSize: 15, fontWeight: 'bold', lineHeight: '110%', padding: 8, paddingLeft: 10}}>Event Updates</td>
                          </tr>
                          <tr>
                            <td className="padding-top-lg " style={{paddingTop: 15}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding-left-lg padding-right-lg padding-top-xl" style={{paddingLeft: 15, paddingRight: 15, paddingTop: 20}}>
                      <table width="100%" cellPadding={0} cellSpacing={0} style={{borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5}}>
                        <tbody>
                          <tr>
                            <td className="isSectionHeaderLev1" style={{backgroundColor: '#474c56', color: '#ffffff', fontSize: 15, fontWeight: 'bold', lineHeight: '110%', padding: 8, paddingLeft: 10}}>Registration Information</td>
                          </tr>
                          <tr>
                            <td className="padding-top-lg" style={{paddingTop: 15}}>
                              <table width="100%" cellPadding={0} cellSpacing={0} style={{borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5}}>
                                <tbody>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" width="25%" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Badge Number:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>0</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Reg Type:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>SAMPLE REGISTRATION CATEGORY</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Name:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>First Last</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Company:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}} />
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Address 1:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>Address Line 1</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Address 2:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>Address Line 2</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Address 3:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>Address Line 3</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>City:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>Bourne</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>State/Province:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>MA</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Zip/Postal Code:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>02532</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Country:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>United States of America</td>
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Phone:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}} />
                                  </tr>
                                  <tr>
                                    <td className="subheading text-right padding-right-lg padding-bottom-sm" style={{fontSize: 15, fontWeight: 'bold', lineHeight: '110%', paddingBottom: 5, paddingRight: 15, textAlign: 'right'}}>Email:</td>
                                    <td className="padding-bottom-sm" style={{paddingBottom: 5}}>SampleEmail@cdsreg.com</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding-left-lg padding-right-lg padding-top-xl" style={{paddingLeft: 15, paddingRight: 15, paddingTop: 20}}>
                      <table width="100%" cellPadding={0} cellSpacing={0} style={{borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5}}>
                        <tbody>
                          <tr>
                            <td className="isSectionHeaderLev1" style={{backgroundColor: '#474c56', color: '#ffffff', fontSize: 15, fontWeight: 'bold', lineHeight: '110%', padding: 8, paddingLeft: 10}}>Registered Individuals / Items</td>
                          </tr>
                          <tr>
                            <td className="padding-top-lg padding-bottom-lg" style={{paddingBottom: 15, paddingTop: 15}}>
                              <table className="table-generic" width="100%" cellPadding={0} cellSpacing={0} style={{borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5}}>
                                <thead>
                                  <tr>
                                    <th className="text-center" style={{backgroundColor: '#047891', border: '1px solid #ddd', borderColor: '#036378', color: '#ffffff', lineHeight: '110%', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>Badge</th>
                                    <th className="text-center" style={{backgroundColor: '#047891', border: '1px solid #ddd', borderColor: '#036378', color: '#ffffff', lineHeight: '110%', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>Name</th>
                                    <th className="text-center hidden-xs" style={{backgroundColor: '#047891', border: '1px solid #ddd', borderColor: '#036378', color: '#ffffff', lineHeight: '110%', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>Regclass</th>
                                    <th style={{backgroundColor: '#047891', border: '1px solid #ddd', borderColor: '#036378', color: '#ffffff', lineHeight: '110%', padding: 10, verticalAlign: 'top'}}>Items</th>
                                    <th className="text-center" style={{backgroundColor: '#047891', border: '1px solid #ddd', borderColor: '#036378', color: '#ffffff', lineHeight: '110%', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="text-center" style={{border: '1px solid #ddd', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>0</td>
                                    <td className="text-center" style={{border: '1px solid #ddd', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>First
                                      <br style={{lineHeight: '110%'}} />Last</td>
                                    <td className="text-center hidden-xs" style={{border: '1px solid #ddd', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>SAMPLE</td>
                                    <td style={{border: '1px solid #ddd', padding: 10, verticalAlign: 'top'}}>
                                      <table className="table-bullets" width="100%" cellPadding={0} cellSpacing={0} style={{border: 0, borderCollapse: 'collapse', color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, paddingTop: 0}}>
                                        <tbody>
                                          <tr style={{backgroundColor: '#fff'}}>
                                            <td className="text-center padding-xs" style={{border: 0, borderRight: 0, padding: 10, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, paddingTop: 0, textAlign: 'center', verticalAlign: 'top'}}>•</td>
                                            <td className="padding-bottom-sm" style={{border: 0, borderLeft: 0, padding: 10, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, paddingTop: 0, verticalAlign: 'top'}}>
                                              – ($0.00)</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td className="text-center" style={{border: '1px solid #ddd', padding: 10, textAlign: 'center', verticalAlign: 'top'}}>
                                      $0.00
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr style={{backgroundColor: '#f5f5f5'}}>
                                    <td style={{border: '1px solid #ddd', borderRight: 0, padding: 10, verticalAlign: 'top'}} />
                                    <td style={{border: '1px solid #ddd', borderLeft: 0, borderRight: 0, padding: 10, verticalAlign: 'top'}} />
                                    <td className="hidden-xs" style={{border: '1px solid #ddd', borderLeft: 0, borderRight: 0, padding: 10, verticalAlign: 'top'}} />
                                    <td className="padding-sm text-right text-bold" style={{border: '1px solid #ddd', borderLeft: 0, borderRight: 0, padding: 10, textAlign: 'right', verticalAlign: 'top'}}>
                                      <b>Total Paid:</b>
                                    </td>
                                    <td className="padding-sm text-center" style={{border: '1px solid #ddd', borderLeft: 0, padding: 10, textAlign: 'center', verticalAlign: 'top'}}>
                                      $0.00
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding-sm text-center" style={{padding: 5, textAlign: 'center'}}>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table cellPadding={0} cellSpacing={0} id="gmail-fix" style={{borderCollapse: 'collapse', color: '#333333', display: 'none', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.5}}>
                        <tbody>
                          <tr>
                            <td style={{padding: 0}}>
                              <div style={{display: 'none', whiteSpace: 'nowrap', font: '15px courier', color: '#ffffff'}}>
                                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
        );
    }
}

export default SampleEmail;