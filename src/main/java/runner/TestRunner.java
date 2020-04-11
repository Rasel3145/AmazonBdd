package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="/Users/ibook/eclipse-workspace/AmazonBDDFramework/src/main/java/features",
		 dryRun= false,
//		glue= {"stepDefinitions"},
//		plugin={"pretty","html:test-output"}
//		)
		plugin = { "json:target/cucumber.json","html:target/cucumber", "rerun:target/cucumber/rerun.txt"},  	
		monochrome = true,  		
		glue = { "stepDefinitions" } )
		

public class TestRunner {

}
