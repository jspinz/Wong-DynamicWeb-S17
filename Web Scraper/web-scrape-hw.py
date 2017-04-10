from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import subprocess
import time

# brew install chromedriver
driver = webdriver.Chrome()
driver.get('https://flickr.com')
searcher = driver.find_element_by_css_selector('.autosuggest-selectable-item')
searcher.send_keys('nintendo switch')
submitbutton = driver.find_element_by_css_selector('.search-icon-button')
submitbutton.submit()

time.sleep(5)

items = driver.find_elements_by_css_selector('h2.title')
print(items)
for item in items:
    print(item.text)
    # subprocess.call(['say', item.text])