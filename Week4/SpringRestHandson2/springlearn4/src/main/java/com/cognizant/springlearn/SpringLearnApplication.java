import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.cognizant.springlearn.Country;

import java.util.List;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountries();
    }

    public static void displayCountries() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // Load each country individually
        Country us = context.getBean("countryUS", Country.class);
        Country de = context.getBean("countryDE", Country.class);
        Country in = context.getBean("countryIN", Country.class);
        Country jp = context.getBean("countryJP", Country.class);

        LOGGER.debug("Country US: {}", us);
        LOGGER.debug("Country DE: {}", de);
        LOGGER.debug("Country IN: {}", in);
        LOGGER.debug("Country JP: {}", jp);

        // OR: load the list of all countries
        List<Country> countryList = (List<Country>) context.getBean("countryList");
        LOGGER.debug("All Countries from List:");
        for (Country c : countryList) {
            LOGGER.debug(c.toString());
        }
    }
}
