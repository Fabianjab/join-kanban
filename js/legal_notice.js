/**
 * This function opens the legal information page by returning the HTML code.
 *
 */
function renderLegal() {
    let render = `
    <div class="container_help">
        <div onclick="openSummary()" class="arrow_right">
            <img class="arrow_help" src="img/black_arrow_back.svg">
        </div>
        <h2 class="h2_help">Legal Notice</h2>
        <span id="what_is_join" class="small_headlines_help">Informations</span>
        <span id="introduction_join" class="span_help" >The information provided on this website is for general purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.


        </span>
        <span id="how_to_use_it" class="small_headlines_help">Good to know</span
        <span id="introduction_join" class="span_help" >The contents of this website are intended for informational purposes only and do not constitute legal advice. The use of this website does not establish a lawyer-client relationship. While we make efforts to provide accurate and up-to-date information, we make no representations or warranties regarding the accuracy, completeness, or suitability of the information contained herein. Any reliance on the information provided on this website is at your own risk. We disclaim all liability for any actions taken based on the information presented. Always seek the advice of a qualified legal professional before making any legal decisions.






        
    </div>
    `
    return render;
}