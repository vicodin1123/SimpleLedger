function Request(amount, reason, receiptURL, createdOn, addr, index) {
    if (arguments.length != Request.length) {
        throw 'Not enough arguments: Request'
    }

    this.amount = amount;
    this.reason = reason;
    this.receiptURL = receiptURL;
    this.createdOn = createdOn;

    // For UI convenience
    this.addr = addr;
    this.index = index;
}
function Fund(amount, reason) {
    if (arguments.length != Fund.length)
        throw 'Not enough arguments: Fund'

    this.amount = amount;
    this.reason = reason;
}
function RemoveVote(giverVote, adminVote) {
    if (arguments.length != RemoveVote.length)
        throw 'Not enough arguments: RemoveVote'

    this.giverVote = giverVote;
    this.adminVote = adminVote;
}

function Admin(addr, name) {
    if (arguments.length != Admin.length)
        throw 'Not enough arguments: Admin'
    this.addr = addr;
    this.name = name;
}
function Giver(addr, name, budget, approved, paid, funds, fundStatus) {
    if (arguments.length != Giver.length)
        throw 'Not enough arguments: Giver'

    this.addr = addr;
    this.name = name;
    this.budget = budget;
    this.approved = approved;
    this.paid = paid;
    this.funds = funds;
    this.fundStatus = fundStatus;
}
function Beggar(name, addressIndex, requested, approved, paid, requestList, requestStatusList, removeVote, addr) {
    if (arguments.length != Beggar.length) {
        throw 'Not enough arguments: Beggar'
    }

    this.name = name;
    this.addressIndex = addressIndex;
    this.requested = requested;
    this.approved = approved;
    this.paid = paid;
    this.requestList = requestList;
    this.requestStatusList = requestStatusList;
    this.removeVote = removeVote;

    // For UI convenience
    this.addr = addr;
}

module.exports = {
	Request: Request,
	Fund: Fund,	
	RemoveVote: RemoveVote,
    Admin: Admin,
	Giver: Giver,
	Beggar: Beggar
};