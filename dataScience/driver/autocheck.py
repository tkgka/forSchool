from selenium import webdriver as wb
import time

name = '김수환'
birth_day = '020707'

driver = wb.Chrome("/Documents/chromedriver")
url = 'https://eduro.gen.go.kr/stv_cvd_co00_002.do'
driver.get(url)

check_list = ['input#rspns011', 'input#rspns02', 'input#rspns070', 'input#rspns080', 'input#rspns090']

school_input = driver.find_element_by_css_selector('input[name=schulNm]')
school_input.send_keys('소프트')

name_input = driver.find_element_by_css_selector('input[name=pName]')
name_input.send_keys(name)

birth_input = driver.find_element_by_css_selector('input[name=frnoRidno]')
birth_input.send_keys(birth_day)

next_button = driver.find_element_by_css_selector('button.btn_blue')
next_button.click()

time.sleep(0.1)

for i in check_list:
    not_corona = driver.find_element_by_css_selector(i)
    not_corona.click()

submit = driver.find_element_by_css_selector('button#btnConfirm')
submit.click()

driver.quit()
