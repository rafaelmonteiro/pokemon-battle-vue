<template>
	<div class="page-header">
		<h1>
			<router-link class="hidden-xs" :to="{ name: 'selection' }">
				Pokémon Battle
			</router-link>
			<slot></slot>	
		</h1>
		<div class="form-inline">
			<div v-if="apis.length" class="form-group">
			    <select v-on:change="changeApi" v-model="selectedApi"  class="form-control" title="Backend Api">
				  <option v-for="api in apis" v-bind:value="api" >{{ api.name }}</option>
				</select>
			</div>
			<i v-on:click="help" class="btn btn-default fa fa-info-circle help" aria-hidden="true"></i>
		</div>
		<help ref="help"></help>
	</div>
</template>
<script src="./header.js"></script>
<style scoped src="./header.css"></style>