package pageFactory;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class WeatherPage {

	public WebDriver driver;
	public WeatherPage(WebDriver driver) {
		
		this.driver = driver;
	}

	private By menu = By.id("h_sub_menu");
	private By weather = By.xpath("//a[contains(text(),'WEATHER')]");
	private By search = By.id("searchBox");
	private By city = By.xpath("//div[contains(text(),'Kolkata')]");
	private By linkList = By.tagName("a");
	private By cityList = By.tagName("label");
	//private By cityName = By.id("Kolkata");
	private By cityName = By.cssSelector("[type='checkbox']");
	private By cityNameMap = By.className("cityText");
	private By weatherDetails = By.cssSelector("[class='leaflet-popup-content']");
	private By degree = By.xpath("//b[contains(text(),'Degrees')]");
	
	List<WebElement> l;
	List<WebElement> l1;
	List<WebElement> l2;
	public void getlinkList()
	{
		l = driver.findElements(linkList);
		for(int i =0; i<l.size(); i++)
		{
			String name = l.get(i).getText();
			if(name.contains("WEATHER"))
			{
				driver.findElements(linkList).get(i).click();
				break;
			}
		}
	}
	
	public void getCityList(String city)
	{
		l1 = driver.findElements(cityList);
		for(int i =0; i<l1.size(); i++)
		{
			String name = l1.get(i).getText();
			if(name.contains(city))
			{
				driver.findElement(search).sendKeys(city);
				Assert.assertTrue(driver.findElements(cityList).get(i).isDisplayed());
				if(driver.findElements(cityName).get(i).isSelected())
				{
					Assert.assertTrue(true);
					break;
				}
				else
				{
					driver.findElements(cityName).get(i).click();
					break;
				}
				
				
			}
		}
	}
	
	public void getCityNameMap(String city)
	{
		l2 = driver.findElements(cityNameMap);
		for(int i=0; i<l2.size(); i++)
		{
			String name = l2.get(i).getText();
			if(name.contains(city))
			{
				Assert.assertTrue(driver.findElements(cityNameMap).get(i).isDisplayed());
				driver.findElements(cityNameMap).get(i).click();
				break;
			}
		}
	}
	
	public WebElement clickMenu()
	{
		return driver.findElement(menu);
	}
	
	public WebElement clickWeather()
	{
		return driver.findElement(weather);
	}
	
	public WebElement searchCity()
	{
		return driver.findElement(search);
	}
	
	public WebElement clickCity()
	{
		return driver.findElement(city);
	}
	
	public WebElement dispayWeatherDetails()
	{
		return driver.findElement(weatherDetails);
	}
	
	public WebElement getDegree()
	{
		return driver.findElement(degree);
	}
}
