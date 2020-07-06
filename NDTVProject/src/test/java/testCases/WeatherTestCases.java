package testCases;

import static io.restassured.RestAssured.given;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pageFactory.LandingPage;
import pageFactory.WeatherPage;
import resources.APIResources;
import resources.Base;

public class WeatherTestCases extends Base implements Comparator<Integer>{

	LandingPage lp;
	WeatherPage wp;
	JsonPath js;
	Response givenResponse;
	RequestSpecification request;
	int finalTemp;
	int Temperature;
	WeatherTestCases wt1;
	WeatherTestCases wt2;
	
	@Test(priority=1)
	public void initialize_the_chrome_browser() throws IOException
	{
		 driver=invokeBrowser();
	}
	
	@Test(priority=2)
	public void user_navigates_to_the_NDTV_home_page() throws Throwable {
		
		driver.get(prop.getProperty("url"));
		Assert.assertEquals(driver.getTitle(), prop.getProperty("title"));
	}
	
	@Test(priority=3)
	public void user_should_be_able_to_validate_whether_the_NDTV_logo_is_displaying_or_not() throws Throwable {

		lp = new LandingPage(driver);
		Assert.assertTrue(lp.getLogo().isDisplayed());
	}
	
	@Test(priority=4)
    public void user_should_be_able_to_click_on_the_weather_link() throws Throwable {
    	
    	wp = new WeatherPage(driver);
    	wp.clickMenu().click();
    	wp.getlinkList();
    	
    }
    
	@Test(priority=5, dataProvider="getCity")
    public void user_enters_the_cityname_and_checks_if_it_is_displayed_and_selected(String city) throws Throwable {
        
    	wp.getCityList(city);
    }
    
	@Test(priority=6, dataProvider="getCity")
    public void user_verifies_that_the_city_is_available_on_the_map_and_clicks_on_it_to_display_the_weather_details(String city) throws Throwable {
        
    	wp.getCityNameMap(city);
    	Assert.assertTrue(wp.dispayWeatherDetails().isDisplayed());
    }
	
	@Test(priority=7)
    public void user_saves_the_temperature_in_degrees() throws Throwable {
    	String text = wp.getDegree().getText();
		String[] newText = text.split(":");
		String temperature = newText[1].trim();
		Temperature = Integer.parseInt(temperature);
		System.out.println(Temperature);
    }
    
	@Test(priority=8)
    public void user_closes_the_browser() throws Throwable {
        
		driver.quit();
    }
    
	@Test(priority=9, dataProvider="getCityAppID")
    public void user_passes_cityname_and_appid_to_the_request_uri(String city, String appid) throws Throwable {

		RestAssured.baseURI=getGlobalValues();
		
		 request = given().queryParam("q", city).queryParam("appid", appid);
		 request.log().all();
	}
    
	@Test(priority=10, dataProvider="getResourceMethod")
    public void user_calls_Resource_with_Required_http_request(String strResource, String httpMethod) throws Throwable {
        
    	APIResources ar = APIResources.valueOf(strResource);
    	String ResourceAPI = ar.getResource();	
    	System.out.println(ResourceAPI);
    	
    	if(httpMethod.equalsIgnoreCase("POST"))
			givenResponse = request.when().post(ResourceAPI).then()
			.extract().response();
		
		else if (httpMethod.equalsIgnoreCase("GET"))
			givenResponse = request.when().get(ResourceAPI).then()
			.extract().response();
		
		else if (httpMethod.equalsIgnoreCase("DELETE"))
			givenResponse = request.when().delete(ResourceAPI).then()
			.extract().response();
	}
    
	@Test(priority=11)
    public void the_api_call_should_be_successfull_and_the_status_code_should_be_200() throws Throwable {
        
    	Assert.assertEquals(givenResponse.getStatusCode(),200);
    }
	
	@Test(priority=12)
    public void user_saves_the_temperature_in_degrees_celsius() throws Throwable {
    	String finalResponse = givenResponse.asString();
    	System.out.println(finalResponse);
    	js = getJsonPath(finalResponse);
    	double temp = js.getDouble("main.temp");
    	System.out.println(temp);
    	double deg = temp-273.15;
    	long val = Math.round(deg);
    	finalTemp = (int) val;
    	System.out.println(finalTemp);
    }
	
	@Override
	public int compare(Integer arg0, Integer arg1) {
		

		if(arg0==arg1)
		{
			System.out.println("Pass");
			return 0;
		}
		else if(arg0>arg1)
		{
			System.out.println("Pass");
			return 1;
		}
		{
			System.out.println("Fail");
			return -1;
		}
	
	}
	
	@Test(priority=13)
	public void CompareTemp()
	{

		Comparator<Integer> com = new WeatherTestCases();
		com.compare(Temperature, finalTemp);

		
	}
    
	@DataProvider
	public Object[][] getCity()
	{
		//Array is 5 means it starts with 0,1,2,3,4.
		Object[][] obj = new Object[1][1];
		obj[0][0] = "Kolkata";
		return obj;
	}
	
	@DataProvider
	public Object[][] getCityAppID()
	{
		//Array is 5 means it starts with 0,1,2,3,4.
		Object[][] obj = new Object[1][2];
		obj[0][0] = "Kolkata";
		obj[0][1] = "7fe67bf08c80ded756e598d6f8fedaea";
		return obj;
	}
	
	@DataProvider
	public Object[][] getResourceMethod()
	{
		//Array is 5 means it starts with 0,1,2,3,4.
		Object[][] obj = new Object[1][2];
		obj[0][0] = "GETWeatherAPI";
		obj[0][1] = "GET";
		return obj;
	}




}
