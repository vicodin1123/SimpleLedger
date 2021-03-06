var headerOption = {
    addRequestButton: 
    `
    <div class="button plus addRequest">&#43;</div>
    `,
    addBeggarButton: 
    `
    <div class="button plus addBeggar">&#43;</div>
    `,
};

var beggarInfo = `
			<div class="beggarInfo">
                <div class="cell name"></div>
                <div class="cell requested number"></div>
                <div class="cell approved number"></div>  
                <div class="cell paid number"></div>              
                <input type="hidden" class="address"/>               
    		</div>`;

var beggarTable = `
	        <div id="beggarTable">
	        </div>`;

var requestInfo = {
    block: 
    `
    <div class="requestInfo">
        <div class="amount cell"></div>
        <div class="other cell">
            <div class="reason color"></div>                    
            <div class="option color"></div>
        </div>
        <div class="footer">
            <div class="additionalInfo color"></div>
        </div>
        <input type="hidden" class="address"/>
        <input type="hidden" class="requestIndex"/>
    </div>`,
    innerBlock:
    `
    <div class="amount cell"></div>
    <div class="other cell">
        <div class="reason color"></div>                    
        <div class="option color"></div>
    </div>                    
    <div class="footer">
        <div class="additionalInfo color"></div>
    </div>
    <input type="hidden" class="address"/>
    <input type="hidden" class="requestIndex"/>
    `,
    approvalPendingOptions: 
    `
    <div class="approvalPendingOptions">
        <button class="approve yellow">Approve</button>
        <button class="paid gray">Paid</button>
        <button class="reject red">Reject</button>
    </div>
    `,
    paymentPendingOptions: 
    `
    <div class="paymentPendingOptions">
        <button class="paid gray">Paid</button>
    </div>
    `,    
    disputedOptions: 
    `
    <div class="disputedOptions">
        <button class="approve yellow">Approve</button>
        <button class="paid gray">Paid</button>
    </div>
    `,
};



module.exports = {
	beggarInfo: beggarInfo,
	beggarTable: beggarTable,
	requestInfo: requestInfo,
    headerOption: headerOption
}