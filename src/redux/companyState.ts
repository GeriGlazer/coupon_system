
import { company_details } from './../modal/company_details';

export class CompanyState{
    company: company_details[] = [];
}

export enum compActionType{
    downloadCompanies = "downloadCompanies",
    deleteCompany = "deleteCompany",
    updateCompany = "updateCompany",
    addCompany = "addCompany",
    removeAll = "removeAll",
}

export interface compAction{
    type: compActionType,
    payload?: any,
}


export function downloadCompanies(companies: company_details[]):compAction{
    return {type: compActionType.downloadCompanies, payload:companies}
}

export function deleteCompany(companyId:number):compAction{
    return {type: compActionType.deleteCompany, payload:companyId}
}

export function updateCompanies(company:company_details):compAction{
    return {type: compActionType.updateCompany, payload:company}
}

export function addCompany(company:company_details):compAction{
    return {type: compActionType.addCompany, payload:company}
}

export function removeAll():compAction{
    return {type: compActionType.removeAll
}
}

export function CompanyReducer (currentState: CompanyState = new CompanyState, action: compAction):CompanyState{
    const newState = {...currentState};

    switch(action.type){
        case compActionType.downloadCompanies:
            newState.company = action.payload;
        break;

        case compActionType.deleteCompany:
            newState.company = newState.company.filter(item=>item.id!==action.payload);
        break;

        case compActionType.updateCompany:
            var updateCompany = {...newState.company}.filter(item=>item.id!==action.payload.id);
            updateCompany.push(action.payload);
            newState.company = updateCompany;
        break;

        case compActionType.addCompany:
            //var addCompany = {...newState.company}.filter(item=>item.id!==action.payload)
            //addCompany.push(action.payload)
            //newState.company = addCompany;

            newState.company.push(action.payload);
            //newState.company = newState.company.filter(item=>item.id!==action.payload);
        break;

        case compActionType.removeAll:
            newState.company = [];
        break;

    }
    return newState;
}