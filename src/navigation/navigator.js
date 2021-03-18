import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Register from '../screens/register';
import SurveyView from '../screens/surveyview';
import SurveyDetail from '../screens/surveydetail';

const stackNavigatorOptions ={
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    SurveyView:{screen:SurveyView},
    SurveyDetail:{screen:SurveyDetail}
},
{
    defaultNavigationOptions : stackNavigatorOptions
});
export default createAppContainer(AppNavigator);
