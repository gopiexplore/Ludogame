import { CommonActions, createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef=createNavigationContainerRef()
export async function navigate(routeName,parms){
    navigationRef.isReady();
    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.navigate(routeName,parms));
    }
}
export async function resetAndNavigate(routeName){
    //navigate.isReady();
    if(navigationRef.isReady()){
        navigationRef.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{name:routeName}],
            })
        )
    }
}
export async function goBack(){
    navigate.isReady();
    if(navigationRef.isReady()){
        navigationRef.dispatch(
            CommonActions.goBack()
        )
    }
}
export async function push(routeName,parms){
    navigate.isReady();
    if(navigationRef.isReady()){
        navigationRef.dispatch(
            CommonActions.push(routeName,parms)
        )
    }
}

export async function prepareNavigation(){
    navigationRef.isReady();
}