#!/usr/bin/env python
# coding: utf-8

# In[4]:



tv_seoul["최근증가율"]=(tv_seoul['2016년']+tv_seoul['2015년']+tv_seoul['2014년'])/tv_seoul['2013년도 이전']*100
tv_seoul.sort_values(by="최근증가율", ascending=False).head()


# In[6]:


tv_seoul.sort_values(by='소계', ascending=False).head()


# In[37]:


pop_seoul = pd.read_excel("../data/01. population_in_Seoul.xls", header=2,usecols='B, D, G, J, N', encoding='utf-8')
pop_seoul.head()


# In[38]:



pop_seoul.rename(columns={pop_seoul.columns[0]:"구별", pop_seoul.columns[1]:"인구수", pop_seoul.columns[2]:"한국인", pop_seoul.columns[3]:"외국인", pop_seoul.columns[4]:"고령자"}, inplace = True)
pop_seoul.head()


# In[39]:


pop_seoul.drop([0], inplace=True)
pop_seoul.head()


# In[40]:


pop_seoul.rename(columns={pop_seoul.columns[0]:"구별", pop_seoul.columns[1]:"인구수", pop_seoul.columns[2]:"한국인", pop_seoul.columns[3]:"외국인", pop_seoul.columns[4]:"고령자"}, inplace = True)
pop_seoul.head()


# In[41]:


pop_seoul[pop_seoul['구별'].isnull()]


# In[33]:


pop_seoul['구별'].unique()


# In[42]:


pop_seoul['외국인비율'] = pop_seoul['외국인']/pop_seoul['인구수']*100
pop_seoul['고령자비율'] = pop_seoul['고령자']/pop_seoul['인구수']*100
pop_seoul.head()


# In[49]:


pop_seoul.drop([26],inplace=True)
pop_seoul.head()


# In[50]:


pop_seoul.sort_values(by='한국인', ascending=False).head()


# In[46]:


pop_seoul.sort_values(by='외국인비율', ascending=False).head()


# In[51]:


pop_seoul.sort_values(by='인구수', ascending=False).head()


# In[74]:


del data_result['2013년도 이전']
del data_result['2014년']
del data_result['2015년']
del data_result['2016년']
data_result.head()


# In[52]:


data_result = pd.merge(tv_seoul, pop_seoul, on='구별')
data_result.head()


# In[37]:


corr = data_result.corr(method = 'pearson')
corr


# In[53]:


data_result.set_index('구별', inplace=True)
data_result.head()


# In[54]:


import statsmodels.api as sm
rt_model = sm.OLS.from_formula("소계 ~ 인구수", data_result).fit()
rt_model.summary()


# In[55]:


import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')

import platform
from matplotlib import font_manager, rc
plt.rcParams['axes.unicode_minus']=False

path="C:\Windows\Fonts\HMFMOLD.TTF"
font_name = font_manager.FontProperties(fname=path).get_name()
rc('font', family=font_name)


# In[56]:


plt.figure(figsize=(9,9))
data_result['소계'].plot(kind='barh')
plt.grid()
plt.show()


# In[61]:


data_result['소계'].sort_values().plot(kind='barh',grid=True, figsize=(9,9))
plt.show()


# In[66]:


data_result['cctv비율'] = data_result['소계']/data_result['인구수']*100
data_result.head()


# In[67]:


data_result['cctv비율'].sort_values().plot(kind='barh',grid=True, figsize=(9,9))
plt.show()


# In[69]:


plt.figure(figsize=(6,6))
plt.scatter(data_result['인구수'],data_result['소계'],s=50)
plt.xlabel('인구수')
plt.ylabel('CCTV')
plt.grid()
plt.show()


# In[70]:


import numpy as np

fp1 = np.polyfit(data_result['인구수'],data_result['소계'],1)
fp1


# In[71]:


f1 = np.poly1d(fp1)
fx = np.linspace(100000, 700000, 100)


# In[72]:


plt.figure(figsize=(6,6))
plt.scatter(data_result['인구수'],data_result['소계'],s=50)
plt.plot(fx, f1(fx), linestyle ='dashed', lw=3, color='g')
plt.xlabel('인구수')
plt.ylabel('CCTV')
plt.grid()
plt.show()


# In[75]:


data_result['오차']= np.abs(data_result['소계']- f1(data_result['인구수']))
df_sort = data_result.sort_values(by='오차', ascending = False)
df_sort.head()


# In[81]:


plt.figure(figsize=(14,10))
plt.scatter(data_result['인구수'],data_result['소계'],c=data_result['오차'], s=50)
plt.plot(fx, f1(fx), linestyle ='dashed', lw=3, color='g')

for n in range(10):
    plt.text(df_sort['인구수'][n]*1.02, df_sort['소계'][n]*0.98, df_sort.index[n], fontsize = 15)
    
plt.xlabel('인구수')
plt.ylabel('CCTV')
plt.colorbar()
plt.grid()
plt.show()


# In[82]:


data_result.to_csv("../data/01. CCTV_result.csv", encoding='utf-8', sep=',')


# In[ ]:




