package resources;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.restassured.path.json.JsonPath;

public class Base {

	public WebDriver driver;
	public Properties prop;
	public WebDriver invokeBrowser() throws IOException
	{
		prop = new Properties();
		FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\resources\\data.properties");
		prop.load(fis);
		
		String browserName = prop.getProperty("browser");
		if(browserName.contains("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\main\\java\\resources\\chromedriver.exe");
			ChromeOptions c = new ChromeOptions();
			if(browserName.contains("headless"))
			{
				c.addArguments("headless");
			}
			
			driver = new ChromeDriver(c);
			
		}
		else if(browserName.contains("firefox"))
		{
			//Details of FirefoxDriver
		}
		
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		return driver;
	}
	
	public static String getGlobalValues() throws IOException
	{
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\resources\\data.properties");
		prop.load(fis);
		String URI = prop.getProperty("BaseURI");
		return URI;
	}
	
	public JsonPath getJsonPath(String response)
	{
		JsonPath js = new JsonPath(response);
		return js;
	}
	
}
